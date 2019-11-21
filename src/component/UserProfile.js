import React from "react";
import { Grid } from "@material-ui/core";

export default React.memo(function UserProfile(props) {
  console.log(props);
  return (
    <Grid container style={{ maxWidth: "300px" }}>
      <Grid item xs={5} style={{ display: "flex", marginBottom: "5px" }}>
        Player:
      </Grid>
      <Grid item xs={7}>
        {props.player}
      </Grid>
      <Grid item xs={5} style={{ display: "flex", marginTop: "5px" }}>
        Game Status:
      </Grid>
      <Grid item xs={7}>
        {props.gameStatus}
      </Grid>
    </Grid>
  );
});
