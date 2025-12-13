import "./Locations.css"
import { useState, useEffect } from "react"
import { getAllLocations } from "../services/locationService"
import { Location } from "./Location"
import { Link } from "react-router-dom"

export const AllLocations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        getAllLocations().then((locArr) => setLocations(locArr))
    }, [])

    return (
        <section className="all-locations">
            {locations.map((location) => {
                return (
                    <Link   to={`./${location.id}`}
                            key={location.id}>
                    <Location 
                        
                            location={location} />
                    </Link>
                    

                )

            }

            )}
        </section>

    )
}