import { useState, useEffect } from "react"
import { Outlet, Routes, Route } from "react-router-dom"
import { NavBar } from "../nav/NavBar"
import { AllReports } from "../reports/AllReports"
import { ReportDetails } from "../reports/ReportDetails"
import { Profile } from "../users/Profile"
import { NewReportForm } from "../forms/NewReportForm"
import { EditReport } from "../forms/EditReportForm.jsx"
import { Favorites } from "../reports/Favorites"
import { AllLocations } from "../locations/AllLocations.jsx"
import { LocationDetails } from "../locations/LocationDetails.jsx"
import { AllFlies } from "../flies/AllFlies.jsx"
import { FlyDetails } from "../flies/FlyDetails.jsx"
import { Homepage } from "../Homepage/Homepage.jsx"
import { Heading } from "../reports/Heading.jsx"
import { LocationsHeading } from "../locations/LocationsHeading.jsx"
import { FlyBoxHeading } from "../flies/FlyBoxHeading.jsx"

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
                        <NavBar currentUser={currentUser} />
                        <Outlet />
                    </>
                }>
                <Route index element={<Homepage currentUser={currentUser} />} />
                <Route path="reports" element={<>< Heading /> <Outlet/></>}>
                    <Route index element={<AllReports currentUser={currentUser} />} />
                    <Route path = ":id" element={<ReportDetails currentUser={currentUser} />} />
                </Route>
                    <Route path="reports/:id/edit" element={<EditReport currentUser={currentUser} />} />
                

                <Route path="profile/:id"
                    element={<Profile currentUser={currentUser} />} />

                <Route path="new"
                    element={<NewReportForm currentUser={currentUser} />} />


                <Route path="favorites"
                    element={<>< Heading /> <Outlet/><Favorites currentUser={currentUser} /></>} />
                
                <Route path="locations" element={<><LocationsHeading/><Outlet/></>}>
                    <Route index element={<AllLocations />} />
                    <Route path=":id" element={<LocationDetails currentUser={currentUser}/>} />
                
                </Route>
                <Route path="flies" element={<><FlyBoxHeading/><Outlet/></>}>
                    <Route index element={<AllFlies />} />
                    <Route path=":id" element={<FlyDetails currentUser={currentUser}/>} />
                
                </Route>
            </Route>
        </Routes>

    )

}