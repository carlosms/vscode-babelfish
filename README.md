# VSCode uast-viewer

**WARNING**: not even alpha code

An attempt to visualize UAST from VSCode using [the webview API](https://code.visualstudio.com/docs/extensions/webview).

Currently it displays parsed UAST from file contents as normal JSON, the bblfsh uast-viewer is not used to render.

Requires [bblfshd](https://github.com/bblfsh/bblfshd) and [grpc web proxy](https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy), both can be run with docker compose:

```bash
docker-compose up
```

![screenshot](./doc/screenshot.png)

Based on:
- https://github.com/rebornix/vscode-webview-react
- https://github.com/bblfsh/uast-viewer
- https://github.com/smacker/in-browser-uast
- https://github.com/improbable-eng/grpc-web
- https://github.com/mac-s-g/react-json-view

## Development

Run following commands in the terminal

```shell
yarn install
yarn build
```
And then press F5, in Extension Development Host session, run `Start React Webview` command from command palette.
Right now you can only run production bits (`yarn build`) in the webview.
