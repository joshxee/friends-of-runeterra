import React, { Component } from "react";
import "./App.css";
import * as CardAPI from "./API/CardAPI";
import CardCode from "../src/component/CardCode";
import Session from "../src/component/Session";
import VoteResults from "./component/VoteResults";
import UserProfile from "./component/UserProfile";
import { Grid } from "@material-ui/core";

export default class App extends Component {
  state = {
    allCards: [],
    sessionId: "",
    voterId: "",
    votes: [],
    player: "",
    gameState: "",
    isSessionIdGiven: false
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      try {
        CardAPI.getCodes(this.state.sessionId).then(response => {
          if (typeof response === "undefined" || typeof response.cards === "undefined") {
            console.log("undefined cards response");
          } else {
            this.setState({
              allCards: response.cards,
              player: response.playerName,
              gameStatus: response.gameState,
              isSessionIdGiven: true
            });
            console.log("Polled cards: ", { response });
          }
        });

        CardAPI.getVotes(this.state.sessionId).then(response => {
          if (typeof response === "undefined") {
            console.log("undefined votes response");
          } else {
            this.setState({ votes: response.votes });
            console.log("Polled votes: ", { response });
          }
        });
      } catch (error) {
        console.log(`ERROR Name: ${error.name} Message: ${error.message}`);
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
      //this.getAllBooks();
    });
  };

  render() {
    let { allCards, sessionId, playerName, voterId, votes } = this.state;

    return (
      <div className="App">
        <img src={require('./images/header1.png')} alt="Header"/>

        <Grid container style={{ height: "100px" }}>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Session
              sessionId={sessionId}
              playerName={playerName}
              voterId={voterId}
              onChangeQuery={this.updateSessionId}
              onChangeVoter={this.updateVoterId}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            {this.state.isSessionIdGiven ? (
              <UserProfile
                player={this.state.player}
                gameStatus={this.state.gameStatus}
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <div className="split left">
          <CardCode Cards={allCards} Vote={this.sendVote} />
        </div>
        {/* <div className="split right">
          <CardCode Cards={allCards} Vote={this.sendVote} />
        </div> */}
        <div className="footer">
          <VoteResults votes={votes} />
        </div>
      </div>
    );
  }
}
