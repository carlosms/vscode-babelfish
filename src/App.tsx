import * as React from "react";

import "uast-viewer/dist/default-theme.css";
import { DetachedEditor } from "./DetachedEditor";

// Same values as the ones applied by withUASTEditor in CodeViewer.js
// https://github.com/bblfsh/uast-viewer/blob/v0.2.0/src/withUASTEditor.js#L208

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

      if (event.data.uast !== undefined) {
        this.setState({
          uast: event.data.uast
        });
      }

      if (event.data.loading === true) {
        this.setState({
          uast: undefined
        });
      }
    });
  }

  public render() {
    if (this.state.uast === undefined) {
      return <div>loading...</div>;
    }

    return <DetachedEditor uast={this.state.uast} />;
  }
}

export default App;
