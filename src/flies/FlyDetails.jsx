import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFlyById } from "../services/flyService"
import { getAllLocations, getLocationFromFly } from "../services/locationService"


export const FlyDetails = () => {

    const { id } = useParams()
    const [fly, setFly] = useState({})
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getFlyById(id).then((flyObj) => setFly(flyObj))
    }, [])

    useEffect(() => {
        getLocationFromFly(fly.locationId).then((loc) => setLocations(loc))
    }, [])



    return (
        <>
        <section className="fly-container">

            <div className="fly-title">{fly.name}</div>
            <div className="fly-subtitle">{fly.type}</div>

            <img
                src={fly.imageUrl}
                alt={fly.name}
                className="fly-detail-image"
            />

            <div className="fly-subtitle">{fly.description}</div>

        </section>

   
           

                      
                   

        </>
    )
}