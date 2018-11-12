import * as React from "react";

import UASTViewer from "uast-viewer";
import { expandRootIds, uastV2 } from "uast-viewer";
import "uast-viewer/dist/default-theme.css";

import ReactJson from "react-json-view";

// Same values as the ones applied by withUASTEditor in CodeViewer.js
// https://github.com/bblfsh/uast-viewer/blob/v0.2.0/src/withUASTEditor.js#L208
const ROOT_ID = 1;
const ROOT_IDS = [ROOT_ID];
const LEVELS_EXPAND = 2;

interface IState {
  uast: object | undefined;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      uast: undefined
    };

    window.addEventListener("message", event => {
      // tslint:disable-next-line
      // console.log(`message received. uast: ${JSON.stringify(event.data.uast,null,"  ")}`);

      this.setState({
        uast: event.data.uast
      });
    });
  }

  public render() {
    return this.renderUAST();
  }

  public renderUAST() {
    if (this.state.uast === undefined) {
      return <div>loading...</div>;
    }

    const flatUAST = this.transform(this.state.uast);
    const searchResults = this.getSearchResults(flatUAST);
    const rootIds = searchResults || [ROOT_ID];

    return <UASTViewer uast={flatUAST} rootIds={rootIds} />;
  }

  public renderBoth() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <div style={{ height: "50%", minHeight: "500px" }}>
          {this.renderUAST()}
        </div>
        <div style={{ height: "50%" }}>
          <ReactJson
            src={this.state.uast || {}}
            iconStyle="square"
            enableClipboard={false}
            displayDataTypes={false}
          />
        </div>
      </div>
    );
  }

  private getSearchResults(flatUAST: any) {
    if (!flatUAST) {
      return null;
    }

    const rootNode = flatUAST[ROOT_ID];
    if (!rootNode) {
      return null;
    }

    if (Array.isArray(rootNode.n)) {
      return rootNode.n.map((c: any) => c.id);
    }

    return null;
  }

  // Applies the uast-viewer object shape transformer, and expands the first
  // 2 levels
  private transform(uast: any) {
    const flatUAST = uastV2.transformer(uast);
    return expandRootIds(
      flatUAST,
      ROOT_IDS,
      LEVELS_EXPAND,
      uastV2.getChildrenIds
    );
  }
}

export default App;
