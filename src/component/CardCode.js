import React, { Component } from "react";
import { get, getCodes } from "../API/CardAPI";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import "../App.css";

export default class CardCode extends Component {
  state = { raised: false };
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

  toggleRaised = () => this.setState({ raised: !this.state.raised });

  render() {
    return (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {this.getCardList().map(card => {
          return (
            <Grid item xs={3}>
              <Card className="cardName">
                <CardActionArea>
                  <CardMedia
                    className="media"
                    image={require("../../src/DataDragonSet1/en_us/img/cards/01DE001.png")}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Josh is cool
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
