import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CardCode from "../src/component/CardCode";

function App() {
  return (
    <div className="App">
      <div className="split left">
        <CardCode />
      </div>
      <div className="split right">
        <CardCode />
      </div>
    </div>
  );
}

export default App;
