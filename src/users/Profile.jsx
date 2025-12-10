import { useEffect, useState } from "react"
import { getAllReports } from "../services/reportService"
import { Link } from "react-router-dom"
import { Report } from "../reports/Report"
import "./Profile.css"


export const Profile = ({ currentUser }) => {



    const [reports, setReports] = useState([])
    const [filteredReports, setFilteredReports] = useState([])

    const userId = currentUser.id



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
       
            <section className="app-heading">
                <h2 className="app-title">My Profile</h2>
            </section>
             <section className="container">
            <h2>{currentUser?.name}</h2>
            <div>
                <span>Email: </span>
                {currentUser?.email}
            </div>
        </section>
        <section className="all-reports">
            <h3 className="title">My Reports:</h3>
            {filteredReports.map((reportObj) => {
                return <Link to={`../reports/${reportObj.id}`} key={reportObj.id}><Report reportObj={reportObj} />
                </Link>
            })}

        </section>
    </section>

}