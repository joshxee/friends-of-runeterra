import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import { cardVote } from "../API/VoteAPI";

export default class CardCode extends Component {
  handleCardVoting = card => {
    var cardInfo = {
      friendId: this.props.Cards.id,
      gameSessionId: this.props.Cards.gameSessionId,
      cardId: card.id,
      cardCode: card.code,
      votedAt: "2019-11-19T10:04:15.554Z"
    };
    cardVote(cardInfo);
  };

  render() {
    let cards = this.props.Cards.cards;

    return cards ? (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cards.map(card => {
          return (
            <Grid item xs={3} key={card.cardId}>
              <Card onClick={() => this.handleCardVoting(card)}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: "400px" }}
                    image={require("../DataDragonSet1/en_us/img/cards/01DE001.png")}
                    title="Card Example"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Josh is cool
                    </Typography>
                    <div>{card.cardCode}</div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    ) : (
      ""
    );
  }
}
