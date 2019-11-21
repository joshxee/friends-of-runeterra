import React from "react";

const VoteResults = props => {
  return (
    <div>
      <ul>
        {props.votes.map(u => (
          <li key={u.cardId}>
            <p>{u.cardCode}</p>
            <p>{u.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VoteResults;
