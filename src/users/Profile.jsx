import { useEffect, useState } from "react"
import { getUserById } from "../services/userService"


export const Profile = ({currentUser}) => {


const [user, setUser] = useState({})
const userId = currentUser.id

useEffect(()=>{
    getUserById(userId).then((userObj) => setUser(userObj))
},[currentUser])



    return <section className="container">
        <h2>My Profile</h2>
        <div>
            <span>Name: </span> 
            {user.name}
        </div>
        <div>
            <span>Email: </span> 
            {user.email}
        </div>
        </section>
}