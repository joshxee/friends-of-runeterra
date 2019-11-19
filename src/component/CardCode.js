import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";

export default class CardCode extends Component {

  render() {
    let cards = this.props.Cards

    return (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cards.map(card => {
          return (
            <Grid item xs={3} key={card.cardId}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="../../src/images/darius-high-noon.jpg"
                    title="Contemplative Reptile"
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
                    <div>
                      {card.cardCode}
                    </div>
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
