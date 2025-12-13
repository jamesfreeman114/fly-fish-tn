import { useEffect, useState } from "react"
import { getAllReports } from "../services/reportService"
import { useParams } from "react-router-dom"
import { Report } from "../reports/Report"
import "./Profile.css"
import { getUserById } from "../services/userService"

export const Profile = ({ currentUser }) => {

    const { id } = useParams()
    const userId = currentUser.id
    const profileId = parseInt(id)

    const [reports, setReports] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        getAllReports().then((reports) => {
            const userReports = reports.filter((report) => report.userId === parseInt(id))
            setReports(userReports)
        })
    }, [id])

    useEffect(() => {
        getUserById(id).then(users => setUser(users[0]))
    }, [id])

    return (
    
    <section >
        <div className="app-heading">
            {profileId === userId ? <h2 className="app-title"> My Profile</h2> : ""}
        </div>
        <div className="container">
            <h2>{user.name}</h2>
            <div>
                <span>Email: </span>
                {user.email}
            </div>
        </div>
        <div className="all-reports">
            <h3 className="title">Reports:</h3>
            {reports.map((reportObj) => {
                return (
                    <Report 
                            className="report"
                            key={reportObj.id}
                            reportObj={reportObj}
                            currentUser={currentUser} 
                            showButtons={true} />)})}
        </div>
    </section>
    )
}
