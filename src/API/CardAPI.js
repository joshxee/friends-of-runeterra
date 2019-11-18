const api = `https://friendsofruneterraapi.azurewebsites.net/api`

export const getCodes = username => fetch(`${api}/CardPositions`/*, { headers }*/)
    .then(res => res.json())
    .then(data => data.cards)

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)