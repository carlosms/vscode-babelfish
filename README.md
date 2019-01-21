# VS Code Babelfish Extension

**NOTE**: work in progress

A personal project to visualize [Babelfsih Universal Abstract Syntax Trees (UAST)](https://doc.bblf.sh/) from [Visual Studio Code](https://code.visualstudio.com/) using [the webview API](https://code.visualstudio.com/docs/extensions/webview).

![screenshot](./doc/screencast.gif)

## Requirements

Requires [bblfshd](https://github.com/bblfsh/bblfshd) and [bblfsh JSON proxy](https://github.com/carlosms/bblfsh-json-proxy). Both can be run downloading this project's [docker-compose.yml](./docker-compose.yml) and running:

```bash
docker-compose up
```

## Install

At this moment the extension is not available in the VS Code Marketplace. You will need to install it manually, following the [official instructions](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix):
- Download the latest `.vsix` file from the [releases page](https://github.com/carlosms/vscode-babelfish/releases).
- Run the `Extensions: Install from VSIX` command in the VS Code Command Palette, and open the downloaded file.

Now you can run the command `Bblfsh: Parse UAST` from the Command Palette.

## Development

Run following commands in the terminal

```bash
yarn install
yarn build
```

Then in VS Code  start debugging (F5), and in the Extension Development Host session, run `Bblfsh: Parse UAST` from the command palette.
Right now you can only run production bits (`yarn build`) in the webview. For every change you will need to build and restart debugging.

To package locally, install [`vsce`](https://github.com/Microsoft/vscode-vsce) and run:

```bash
vsce package --yarn --baseContentUrl https://github.com/carlosms/vscode-babelfish --baseImagesUrl https://github.com/carlosms/vscode-babelfish
```

Based on these projects:
- https://github.com/rebornix/vscode-webview-react
- https://github.com/bblfsh/uast-viewer
