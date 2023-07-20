import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// hydrate will reuse the existing DOM nodes instead of creating new ones
ReactDOM.hydrate(<App />, document.getElementById("root"));
