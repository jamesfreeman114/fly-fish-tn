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