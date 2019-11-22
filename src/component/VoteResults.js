import React from "react";
import { Grid } from "@material-ui/core";
import CardsData from "../DataDragonSet1/en_us/data/set1-en_us.json";

const VoteResults = props => {
  console.log(CardsData.filter(data => data.cardCode === "01IO012T2")[0].name);
  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {props.votes.map(u => (
        <Grid container key={u.cardId}>
          <Grid item xs={5} style={{ display: "flex" }}>
            Card:
          </Grid>
          <Grid item xs={7}>
            {typeof CardsData.filter(
              data => data.cardCode === u.cardCode
            )[0] === "undefined"
              ? u.cardCode
              : CardsData.filter(data => data.cardCode === u.cardCode)[0].name}
          </Grid>
          <Grid item xs={5} style={{ display: "flex" }}>
            Total:
          </Grid>
          <Grid item xs={7}>
            {u.total}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default VoteResults;
