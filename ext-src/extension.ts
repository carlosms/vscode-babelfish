import * as path from "path";
import * as vscode from "vscode";
import * as request from "request";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("babelfish.start", () => {
      ReactPanel.createOrShow(context.extensionPath);
    })
  );
}

/**
 * Manages react webview panels
 */
class ReactPanel {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ReactPanel | undefined;

  private static readonly viewType = "bblfsh";

  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionPath: string;
  private _disposables: vscode.Disposable[] = [];
  private _fileName: string = "";

  public static createOrShow(extensionPath: string) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor");
      return;
    }

    // If we already have a panel, show it.
    // Otherwise, create a new panel.
    if (ReactPanel.currentPanel) {
      ReactPanel.currentPanel._panel.reveal(
        ReactPanel.currentPanel._panel.viewColumn
      );

      ReactPanel.currentPanel.parseContents(editor.document);
    } else {
      let column = vscode.ViewColumn.Active;
      if (editor.viewColumn === vscode.ViewColumn.One) {
        column = vscode.ViewColumn.Two;
      }

      ReactPanel.currentPanel = new ReactPanel(extensionPath, column);

      ReactPanel.currentPanel.parseContents(editor.document);
    }
  }

  private constructor(extensionPath: string, column: vscode.ViewColumn) {
    this._extensionPath = extensionPath;

    // Create and show a new webview panel
    this._panel = vscode.window.createWebviewPanel(
      ReactPanel.viewType,
      "Bblfsh UAST",
      column,
      {
        // Enable javascript in the webview
        enableScripts: true,

        // prevent state from disappearing when the panel loses visibility
        retainContextWhenHidden: true,

        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [
          vscode.Uri.file(path.join(this._extensionPath, "build"))
        ]
      }
    );

    // Set the webview's initial html content
    this._panel.webview.html = this._getHtmlForWebview();

    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programatically
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          case "alert":
            vscode.window.showErrorMessage(message.text);
            return;
        }
      },
      null,
      this._disposables
    );

    // Watch for text document save events
    vscode.workspace.onDidSaveTextDocument(
      this.onDidSaveTextDocument,
      this,
      this._disposables
    );
  }

  protected parseContents(doc: vscode.TextDocument) {
    this._panel.title = `Bblfsh UAST ${doc.fileName}`;
    this.sendLoading();

    this._fileName = doc.fileName;

    let that = this;

    request.post(
      "http://localhost:8095/parse",
      {
        json: {
          language: doc.languageId,
          content: doc.getText(),
          filename: doc.fileName
        }
      },
      function(error, response, body) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);

        if (error != null) {
          let msg = `Error parsing the file contents: ${error}`;
          if (error.code === "ECONNREFUSED") {
            msg += `.\nPlease make sure bblfshd and bblfsh-json-proxy are running. See https://github.com/carlosms/vscode-babelfish`;
          }

          vscode.window.showErrorMessage(msg);
          return;
        }

        if (response && response.statusCode !== 200) {
          vscode.window.showErrorMessage(
            `Error parsing the file contents: ${body.error}`
          );
          return;
        }

        that.sendUAST(body.uast);
      }
    );

    return undefined;
  }

  public sendUAST(uast: Object) {
    this._panel.webview.postMessage({ uast: uast });
  }

  public sendLoading(){
    this._panel.webview.postMessage({ uast: undefined });
  }

  public onDidSaveTextDocument(e: vscode.TextDocument) {
    if (e.fileName === this._fileName){
      this.parseContents(e);
    }
  }

  public dispose() {
    ReactPanel.currentPanel = undefined;

    // Clean up our resources
    this._panel.dispose();

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _getHtmlForWebview() {
    const manifest = require(path.join(
      this._extensionPath,
      "build",
      "asset-manifest.json"
    ));
    const mainScript = manifest["main.js"];
    const mainStyle = manifest["main.css"];

    const scriptPathOnDisk = vscode.Uri.file(
      path.join(this._extensionPath, "build", mainScript)
    );
    const scriptUri = scriptPathOnDisk.with({ scheme: "vscode-resource" });
    const stylePathOnDisk = vscode.Uri.file(
      path.join(this._extensionPath, "build", mainStyle)
    );
    const styleUri = stylePathOnDisk.with({ scheme: "vscode-resource" });

    // Use a nonce to whitelist which scripts can be run
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
				<meta name="theme-color" content="#000000">
				<title>React App</title>
				<link rel="stylesheet" type="text/css" href="${styleUri}">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
				<base href="${vscode.Uri.file(path.join(this._extensionPath, "build")).with({
          scheme: "vscode-resource"
        })}/">
			</head>

			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root"></div>
				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}

function getNonce() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
