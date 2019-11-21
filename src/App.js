import React, { Component } from "react";
import "./App.css";
import * as CardAPI from "./API/CardAPI";
import CardCode from "../src/component/CardCode";
import Session from "../src/component/Session";
import VoteResults from "./component/VoteResults"

export default class App extends Component {
  state = {
    allCards: [],
    sessionId: "",
    playerName: "",
    voterId: "",
    votes: []
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      try {
        CardAPI.getCodes(this.state.sessionId).then(codes => {
          if (typeof codes === "undefined") {
            console.log("undefined response");
          } else {
            this.setState({ allCards: codes });
            console.log("Polled cards: ", { codes });
          }
        });
        CardAPI.getVotes(this.state.sessionId).then(votes => {
          if (typeof codes === "undefined") {
            console.log("undefined response");
          } else {
            this.setState({ votes: votes });
            console.log("Polled votes: ", { votes });
          }
        });
      } catch (error) {
        console.log("error");
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  updateSessionId = id => {
    this.setState({ sessionId: id });
  };

  updateVoterId = id => {
    this.setState({ voterId: id });
  };

  sendVote = (cardId, cardCode) => {
    let query = {
      friendId: this.state.voterId,
      gameSessionId: this.state.sessionId,
      cardId: cardId,
      cardCode: cardCode,
      votedAt: new Date()
    };
    CardAPI.postVote(query).then(updatedBooks => {
      //add vote to card
      this.getAllBooks();
    });
  };

  render() {
    let { allCards, sessionId, playerName, voterId, votes } = this.state;

    return (
      <div className="App">
        <div>
          <Session
            sessionId={sessionId}
            playerName={playerName}
            voterId={voterId}
            onChangeQuery={this.updateSessionId}
            onChangeVoter={this.updateVoterId}
          />
        </div>
        <div className="split left">
          <CardCode Cards={allCards} Vote={this.sendVote} />
        </div>
        <div className="split right">
          <CardCode Cards={allCards} Vote={this.sendVote} />
        </div>
        <div>
          <VoteResults votes={votes}/>
        </div>
      </div>
    );
  }
}
