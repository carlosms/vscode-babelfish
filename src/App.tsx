import * as React from "react";

import UASTViewer from "uast-viewer";
import { transformer } from "uast-viewer";
import "uast-viewer/dist/default-theme.css";

import ReactJson from "react-json-view";

interface IState {
  uast: object;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      uast: {}
    };

    window.addEventListener("message", event => {
      // tslint:disable-next-line
      // console.log(`message received. uast: ${JSON.stringify(event.data.uast, null, "  ")}`);
      // tslint:disable-next-line
      // console.debug(`message received. uast: ${JSON.stringify(transformer(event.data.uast),null,"  ")}`);

      this.setState({
        uast: event.data.uast
      });
    });
  }

  public render() {
    return <div className="App" style={{ height: "100%" }}>
      <div style={{ height: "50%" }}>
        <UASTViewer uast={transformer(this.state.uast)} />
      </div>
      <div style={{height: "50%" }}>
        <ReactJson
          src={this.state.uast}
          iconStyle="square"
          enableClipboard={false}
          displayDataTypes={false} />
      </div>
    </div>;
  }
}

export default App;
