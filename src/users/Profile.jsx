import { useEffect, useState } from "react"
import { getUserById } from "../services/userService"
import { getAllReports } from "../services/reportService"
import { Link } from "react-router-dom"
import { Report } from "../reports/Report"


export const Profile = ({ currentUser }) => {


    const [user, setUser] = useState({})
    const [reports, setReports] = useState([])
    const [filteredReports, setFilteredReports] = useState([])

    const userId = currentUser.id
    const profileUser = user[0]



    useEffect(() => {
        getUserById(userId).then((userObj) => setUser(userObj))
    }, [currentUser])

    useEffect(() => { getAllReports().then((allReports) => setReports(allReports)) }, [])

    useEffect(() => {
        if (userId) {
            const userMatch = reports.filter((report) => {
                return report.userId === userId
            })
            setFilteredReports(userMatch)
        }
        else {
            setFilteredReports("")
        }
    }, [reports, userId])



    return <section >
        <section className="container">
            <h2>My Profile</h2>
            <div>
                <span>Name: </span>
                {profileUser?.name}
            </div>
            <div>
                <span>Email: </span>
                {profileUser?.email}
            </div>
        </section>
        <section className="all-reports">
            {filteredReports.map((reportObj) => {
                return <Link to={`../reports/${reportObj.id}`} key={reportObj.id}><Report reportObj={reportObj} />
                </Link>
            })}

        </section>
    </section>

}