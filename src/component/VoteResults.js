import React from "react";
import { Grid } from "@material-ui/core";

const VoteResults = props => {
  return (
    <Grid container spacing={2} style={{ padding: "20px" }}>
      {props.votes.map(u => (
        <Grid container key={u.cardId}>
          <Grid item xs={5} style={{ display: "flex" }}>
            Card:
          </Grid>
          <Grid item xs={7}>
            {u.cardCode}
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
