import React, { Component } from "react";
import "./App.css";
import * as CardAPI from "./API/CardAPI";
import CardCode from "../src/component/CardCode";

export default class App extends Component {
  state = {
    allCards: {}
  };

  componentDidMount() {
    this.timer = setInterval(
      () =>
        CardAPI.getCodes("string11111").then(codes => {
          this.setState({
            allCards: codes
          });
          console.log("Polled API: ", { codes });
        }),
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    let allCards = this.state.allCards;

    return (
      <div className="App">
        <div className="split left">
          <CardCode Cards={allCards} />
        </div>
        <div className="split right">
          <CardCode Cards={allCards} />
        </div>
      </div>
    );
  }
}
