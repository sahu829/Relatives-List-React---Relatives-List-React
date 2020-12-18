import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["krishna", "akash", "doli"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relative, index) => (
            <li key={"relativeListItem" + (index + 2)}>
              {relative}
              {index}
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
