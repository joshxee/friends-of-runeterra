import React, { Component } from "react";

export default class CardCode extends Component {
  componentDidMount() {
    this.apiCall();
  }
  apiCall = () => {
    fetch("http://localhost:21337/positional-rectangles?code:something", {
      method: "GET"
    })
      .then(function() {
        console.log(Response.json());
      })
      .catch(function() {});
  };
  render() {
    return <div></div>;
  }
}
