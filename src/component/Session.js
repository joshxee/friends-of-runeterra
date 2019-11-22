import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

class Session extends Component {
  render() {
    const {
      sessionId,
      voterId,
      onChangeQuery,
      onChangeVoter
    } = this.props;

    return (
      <Grid container>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "5px"
          }}
        >
          <TextField
            id="outlined-basic"
            label="Session ID"
            margin="normal"
            value={sessionId}
            variant="outlined"
            onChange={event => onChangeQuery(event.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "5px"
          }}
        >
          <TextField
            id="outlined-basic"
            label="Vorter ID"
            margin="normal"
            value={voterId}
            variant="outlined"
            onChange={event => onChangeVoter(event.target.value)}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Session;
