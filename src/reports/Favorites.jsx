import { useState, useEffect } from "react"
import { getUserLikes } from "../services/userLikesService"
import { Report } from "./Report"

export const Favorites = ({ currentUser }) => {

    const [likes, setLikes] = useState([])

    const userId = currentUser.id

    useEffect(() => {
        getUserLikes(userId).then((all) => setLikes(all))
    }, [])

    return (
        <section>
            <section className="app-heading">
                <h2 className="app-title">My Favorite Reports</h2>
            </section>
            <section className="all-reports">
                {likes.map((userLike) => {
                    return (
                                <Report
                                    className="report"
                                    key={userLike.id} 
                                    userLike={userLike}
                                    currentUser={currentUser} 
                                    showButtons={true}/>
                    )
                })}
            </section>
        </section>
    )
}