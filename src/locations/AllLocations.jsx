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

             <div className="home-page-welcome">
                
                <p>Tennessee is home to some of the best Trout waters in the entire Eastern United States! Take a look over the different locations below to find the best spot near you! From stillwater lakes, to tailwater rivers, and remote mountain streams there are plenty of opportunities out there!</p>

            </div>

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