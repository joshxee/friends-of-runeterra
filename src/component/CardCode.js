import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Grid, Tooltip } from "@material-ui/core";
import Styles from "./common.module.css";

const ToolTipGrid = ({ title, children }) => (
  <Tooltip title={title}>{children}</Tooltip>
);

export default class CardCode extends PureComponent {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  render() {
    let cards = this.props.Cards;

    return (
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {cards.map(card => {
          return (
            <ToolTipGrid title={card.cardId}>
              <Grid item xs={3} key={card.cardId}>
                <img
                  src={require(`../DataDragonSet1/en_us/img/cards/${card.cardId}.png`)}
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
