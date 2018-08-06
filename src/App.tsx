/* tslint:disable */

import * as React from 'react';

import UASTViewer from "uast-viewer";
import "uast-viewer/dist/default-theme.css";

const someUast = {
  1: {
    "InternalType": "CompilationUnit",
    "StartPosition": { "Offset": 0, "Line": 1, "Col": 1 },
    "EndPosition": { "Offset": 446, "Line": 0, "Col": 0 },
    "Roles": ["File"],
    "Children": [2],
    expanded: true
  },
  2: {
    "InternalType": "LineComment",
    "Properties": { "internalRole": "comments", "text": " hello.java" },
    "StartPosition": { "Offset": 0, "Line": 1, "Col": 1 },
    "EndPosition": { "Offset": 13, "Line": 1, "Col": 14 },
    "Roles": ["Comment"],
    "Children": []
  }
};

class App extends React.Component {
  public render() {
    return <div className="App">
        <UASTViewer uast={someUast} />
      </div>;
  }
}

export default App;
