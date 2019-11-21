import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tooltip
} from "@material-ui/core";

const ToolTipGrid = ({ title, children }) => (
  <Tooltip title={title}>{children}</Tooltip>
);

export default class CardCode extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  render() {
    let cards = this.props.Cards;

    return (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cards.map(card => {
          console.log(card)
          return (
            <ToolTipGrid title={card.cardId}>
              <Grid item xs={3} key={card.cardId}>
                <img
                  src={require("../DataDragonSet1/en_us/img/cards/01DE001.png")}
                  style={{ maxWidth: "100%" }}
                  alt="card"
                />
              </Grid>
            </ToolTipGrid>
          );
        })}
      </Grid>
    );
  }
}

// // <Grid item xs={3} key={card.cardId}>
// //   <img
// //     src={require("../DataDragonSet1/en_us/img/cards/01DE001.png")}
// //     style={{ maxWidth: "100%" }}
// //     alt="card"
// //   />
//   {/* <Card>
//     <CardActionArea>
//       <CardMedia
//         style={{ height: "250px", objectFit: "cover" }}
//         image={require("../DataDragonSet1/en_us/img/cards/01DE001.png")}
//         title="Card Example"
//       /> */}
//   {/* <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {card.name}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           component="p"
//         >
//           Josh is cool
//         </Typography>
//         <div>{card.cardCode}</div>
//       </CardContent> */}
//   {/* </CardActionArea>
//   </Card> */}
// // </Grid>
