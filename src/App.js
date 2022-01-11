import React from "react";
import reactDom from "react-dom";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>React App Base</h1>
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
