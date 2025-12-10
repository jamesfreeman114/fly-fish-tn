import { useState, useEffect } from "react"
import { getUserLikes } from "../services/userService"
import { Link } from "react-router-dom"
import { Report } from "./Report"


export const Favorites = ({ currentUser }) => {

    const [likes, setLikes] = useState([])
    
    const userId = currentUser.id

    useEffect(() => {
        getUserLikes(userId).then((all) => setLikes(all))
    }, [userId])




    return (
        <section>
            <section className="app-heading">
                <h2 className="app-title">My Favorite Reports</h2>
            </section>
            <section className="all-reports">
                {likes.map((obj) => {

                

                    return (
                        <Link to={`../reports/${obj.report.id}`} key={obj.id}>
                            <Report reportObj={obj.report}/>
                        </Link>


                    )
                })}

            </section>
        </section>
    )
}