import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Session extends Component {
  render() {
    const {
      sessionId,
      playerName,
      voterId,
      onChangeQuery,
      onChangeVoter
    } = this.props;

    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Session ID"
          margin="normal"
          value={sessionId}
          variant="outlined"
          onChange={event => onChangeQuery(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Vorter ID"
          margin="normal"
          value={voterId}
          variant="outlined"
          onChange={event => onChangeVoter(event.target.value)}
        />
      </div>
    );
  }
}

export default Session;
