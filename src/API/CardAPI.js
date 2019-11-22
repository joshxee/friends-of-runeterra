const api = `https://friendsofruneterraapi.azurewebsites.net/api`;

export const getCodes = sessionID =>
  fetch(`${api}/CardPositions?gameSessionId=${sessionID}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer"
  })
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) return data[0];
      return [];
    })
    .catch(error => console.log(error.message));

export const getVotes = sessionID =>
  fetch(`${api}/Votes?gameSessionId=${sessionID}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer"
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error.message));

export const postVote = query =>
  fetch(`${api}/Votes`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .catch(error => console.log(error.message));
