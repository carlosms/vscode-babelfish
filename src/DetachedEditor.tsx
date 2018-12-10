import * as React from "react";
import * as vscode from "vscode";

import { FlatUASTViewer, withUASTEditor } from "uast-viewer";

type VSCodePos = vscode.Position;

interface ICodeMirrorPos {
  ch: number;
  line: number;
}

interface IProps {
  uastViewerProps: object;
  editorProps: {
    onCursorChanged: (pos: ICodeMirrorPos) => any;
  };
}

class DetachedEditorBase extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    window.addEventListener("message", event => {
      const pos: VSCodePos = event.data.cursor;
      if (pos !== undefined) {
        this.props.editorProps.onCursorChanged({
          ch: pos.character,
          line: pos.line
        });
      }
    });
  }

  public render() {
    return <FlatUASTViewer {...this.props.uastViewerProps} />;
  }
}

export const DetachedEditor = withUASTEditor(DetachedEditorBase);
