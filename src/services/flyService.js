export const getAllFlies = () => {
    return fetch(`http://localhost:8088/flies`).then(res => res.json())
}

export const getFlyById = (id) => {
    return fetch (`http://localhost:8088/flies/${id}`).then(res => res.json())
}
