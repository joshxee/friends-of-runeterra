import React, { Component } from "react";
import { get, getCodes } from "../API/CardAPI";

export default class CardCode extends Component {
  state = { cardList: "" };
  componentDidMount() {}
  //   apiCall = () => {
  //     fetch("http://localhost:21337/positional-rectangles?code:something", {
  //       method: "GET"
  //     })
  //       .then(function() {
  //         console.log(Response.json());
  //       })
  //       .catch(function() {});
  //   };

  getCodes = () => {
    return getCodes("bob");
  };

  getCardList = () => {
    const cardCodes = this.getCodes();
    const cardList = cardCodes.map(cardCode => get(cardCode.code));
    return cardList;
  };

  render() {
    return this.getCardList().map(card => {
      return (
        <>
          <div>Name:{card.name}</div>
          <div>Image:{card.image}</div>
        </>
      );
    });
  }
}
