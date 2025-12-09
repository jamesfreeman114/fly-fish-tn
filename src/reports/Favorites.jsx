import { useState, useEffect } from "react"
import { getUserLikes } from "../services/userService"
import { Link } from "react-router-dom"

export const Favorites = ({currentUser}) => {

    const [likes, setLikes] = useState([])

    const userId=currentUser.id

    const handleUnlike = (event) => {
        event.preventDefault()

        console.log("Button clicked!")
    }

    useEffect(()=>{
        getUserLikes(userId).then((all) => setLikes(all))
    },[])


    return (
        <section className="container">
            <h2>Favorites</h2>
            
            {likes.map((obj) => {
                return (
                    <li key = {obj.id}>
                    <Link to ={`../reports/${obj.reportId}`}>{obj.report.title}</Link>    
                    
                    </li>
                )
            })}
            
        </section>
    )
}