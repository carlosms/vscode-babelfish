# VSCode uast-viewer

**NOTE**: work in progress, not even alpha code

A personal project to visualize UAST from VSCode using [the webview API](https://code.visualstudio.com/docs/extensions/webview).

Requires [bblfshd](https://github.com/bblfsh/bblfshd) and [bblfsh JSON proxy](https://github.com/carlosms/bblfsh-json-proxy), both can be run with docker compose:

```bash
docker-compose up
```

_TODO: bblfsh-json-proxy is not published to docker hub and needs to be run manually from sources._

![screenshot](./doc/screenshot.png)

Based on:
- https://github.com/rebornix/vscode-webview-react
- https://github.com/bblfsh/uast-viewer
- https://github.com/smacker/in-browser-uast
- https://github.com/mac-s-g/react-json-view

## Development

Run following commands in the terminal

```shell
yarn install
yarn build
```
And then press F5, in Extension Development Host session, run `Bblfsh: Parse UAST` command from command palette.
Right now you can only run production bits (`yarn build`) in the webview.
