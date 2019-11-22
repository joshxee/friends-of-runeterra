import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Grid, Tooltip } from "@material-ui/core";
import Styles from "./common.module.css";

const ToolTipGrid = ({ title, children }) => (
  <Tooltip title={title}>{children}</Tooltip>
);

export default class CardCode extends PureComponent {
  static propTypes = {
    Cards: PropTypes.array.isRequired
  };

  setCardArtSource(code) {
    try {
      const src = require(`../DataDragonSet1/en_us/img/cards/${code}.png`);
      return src
    } catch (err) {
      return require(`../DataDragonSet1/en_us/img/cards/01DE001.png`)
    }
  }

  render() {
    let cards = this.props.Cards;

    return (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cards.map(card => {
          return (
            <ToolTipGrid title={card.cardId} key={card.cardId}>
              <Grid item xs={3} key={card.cardId}>
                <img
                  src={this.setCardArtSource(card.cardCode)}
                  // style={{ maxWidth: "100%" }}
                  className={Styles.cardGrid}
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
