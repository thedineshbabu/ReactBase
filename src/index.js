import React from "react";
import reactDom from "react-dom";
import App from "./App";

const Index = () => {
  return <App />;
};

reactDom.render(<Index />, document.getElementById("root"));
