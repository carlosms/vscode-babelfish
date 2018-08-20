import * as React from "react";

import UASTViewer from "uast-viewer";
import "uast-viewer/dist/default-theme.css";

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
      this.setState({
        uast: event.data.uast
      });
    });
  }

  public render() {
    return (
      <div className="App">
        <UASTViewer uast={this.state.uast} />
      </div>
    );
  }
}

export default App;
