import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
    const localFlyUser = localStorage.getItem("fly_user")
    const flyUserObject = JSON.parse(localFlyUser)

    setCurrentUser(flyUserObject)
    },[])

    return (

        <Routes>
            <Route path = "/" element = {<h2>Hello {currentUser.name}!</h2>}/>

        </Routes>
        
    )

}