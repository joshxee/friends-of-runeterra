const api = `https://friendsofruneterraapi.azurewebsites.net/api`;

export const cardVote = cardInfo =>
  fetch(`${api}/Votes`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cardInfo),
    redirect: "follow",
    referrer: "no-referrer"
  });
