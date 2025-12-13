export const getUserLikes = (userId) => {
    return fetch(`http://localhost:8088/userLikes?userId=${userId}&_expand=report&_expand=user&_expand=location`).then((res) => res.json())
}

export const likeReport = (newLike) => {
  return fetch("http://localhost:8088/userLikes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLike),
  }).then((res) => res.json())
}

export const unlikeReport = (id) => {
    return fetch(`http://localhost:8088/userLikes/${id}`, {
        method: "DELETE"
    })
}

