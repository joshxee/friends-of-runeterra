import React from "react";
import { Grid } from "@material-ui/core";

const VoteResults = props => {
  return (
    <div>
      <ul>
        {props.votes.map(u => (
          <li key={u.cardId}>
            <Grid container>
              <Grid
                item
                xs={5}
                style={{ display: "flex" }}
              >
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteResults;
