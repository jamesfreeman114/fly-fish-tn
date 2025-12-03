import { useState, useEffect } from "react"
import { Outlet, Routes, Route} from "react-router-dom"
import { NavBar } from "../nav/NavBar"
import { AllReports } from "../reports/AllReports"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
    const localFlyUser = localStorage.getItem("fly_user")
    const flyUserObject = JSON.parse(localFlyUser)

    setCurrentUser(flyUserObject)
    },[])

    return (

        <Routes>        
            <Route
                 path="/"
                 element={
                    <>
                        <NavBar/>
                        <Outlet/>
                    </>
                 }   
                >

            
                <Route index element = {<AllReports/>}/>         
            </Route>
        </Routes>
        
    )

}