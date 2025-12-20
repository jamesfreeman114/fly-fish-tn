import "./Flies.css"
import { useState, useEffect } from "react"
import { Fly } from "./Fly"
import { getAllFlies } from "../services/flyService"
import { Link } from "react-router-dom"

export const AllFlies = () => {

    const [flies, setFlies] = useState([])

    useEffect(() => {
        getAllFlies().then((flyArr) => setFlies(flyArr))
    }, [])

    return (
        <section className="all-locations">

            <div className="home-page-welcome">
                
                <p>Choosing the right fly pattern is crucial for a successful day on the water! Always make sure to keep an eye on your surroundings and watch what the fish are feeding on to best match the hatch! Check out some of our current fly pattern recommendations below. </p>

            </div>

            {flies.map((fly) => {
                return (
                    <Link   to={`./${fly.id}`}
                            key={fly.id}>
                    <Fly 
                        
                            fly={fly} />
                    </Link>
                    

                )

            }

            )}
        </section>

    )
}