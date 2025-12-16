import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFlyById } from "../services/flyService"

export const FlyDetails = () => {

    const { id } = useParams()
    const [fly, setFly] = useState({})

    useEffect(() => {
        getFlyById(id).then((flyObj) => setFly(flyObj))
    }, [])

    return (
        <section className="location-container">

            <div className="location-title">{fly.name}</div>
            <div className="location-subtitle">{fly.type}</div>

            <img
                src={fly.imageUrl}
                alt={fly.name}
                className="location-detail-image"
            />

            <div className="location-subtitle">{fly.description}</div>

        </section>
    )
}