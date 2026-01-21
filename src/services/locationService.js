import { resumeToPipeableStream } from "react-dom/server"

export const getAllLocations = () => {
    return fetch(`http://localhost:8088/locations`).then(res => res.json())
}

export const getLocationById = (id) => {
    return fetch (`http://localhost:8088/locations/${id}`).then(res => res.json())
}

export const getLocationFromFly = (locationId) => {
     return fetch (`http://localhost:8088/flies?locationId=${locationId}&_expand=location`).then(res => res.json())
}
