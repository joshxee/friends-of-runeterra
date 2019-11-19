import React, { Component } from "react";

class Session extends Component {
  render() {
    const { sessionId, playerName, voterId, onChangeQuery, onChangeVoter } = this.props;

    return (
      <div>
        <input
          className="input-field"
          type="text"
          placeholder="Session ID"
          value={sessionId}
          onChange={event => onChangeQuery(event.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="voterId"
          value={voterId}
          onChange={event => onChangeVoter(event.target.value)}
        />
      </div>
    );
  }
}

export default Session;
