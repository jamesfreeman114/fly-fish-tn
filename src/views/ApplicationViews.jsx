import { useState, useEffect } from "react"
import { Outlet, Routes, Route } from "react-router-dom"
import { NavBar } from "../nav/NavBar"
import { AllReports } from "../reports/AllReports"
import { ReportDetails } from "../reports/ReportDetails"
import { Profile } from "../users/Profile"
import { NewReportForm } from "../forms/NewReportForm"
import { EditReport } from "../forms/EditReportForm.jsx"
import { Favorites } from "../reports/Favorites"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localFlyUser = localStorage.getItem("fly_user")
        const flyUserObject = JSON.parse(localFlyUser)

        setCurrentUser(flyUserObject)
    }, [])

    return (

        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar currentUser={currentUser}/>
                        <Outlet />
                    </>
                }
            >


                <Route index element={<AllReports currentUser={currentUser}/>} />
                <Route path="reports/:id">
                    <Route index element={<ReportDetails currentUser={currentUser} />} />
                    <Route path="edit" element={<EditReport currentUser={currentUser}/>} />
                </Route>

                <Route path="profile/:id"
                    element={<Profile currentUser={currentUser} />} />

                <Route path="new"
                    element={<NewReportForm currentUser={currentUser} />} />


                <Route path="favorites"
                    element={<Favorites currentUser={currentUser} />} />
            </Route>
        </Routes>

    )

}