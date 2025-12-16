import { useState, useEffect } from "react"
import fishLogo from "../assets/Logo-png.png"
import { Report } from "../reports/Report"
import "./Homepage.css"
import { getAllReports } from "../services/reportService"
import { useNavigate } from "react-router-dom"

export const Homepage = ( {currentUser}) => {

    const [reports, setReports] = useState([])
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/reports`)

    }

    useEffect(() => {
        getAllReports().then((arr) => setReports(arr))
    }, [])


    return (
        <section>
            <div className="homepage-header-container">
                <img
                    className="homepage-header"
                    src="https://i.imgur.com/kRmKAHx.jpeg"
                    alt="image">

                </img>

                <img
                    className="homepage-logo"
                    src={fishLogo}>
                </img>
            </div>
            <div className="home-page-welcome">
                <h2>Welcome to Fly Fish Tennessee!</h2>
                <p>We're thrilled to welcome you to Fly Fish TN, an online resource for all things fly fishing in the great state of Tennessee! Whether you are a first time angler looking for tips on how to get started, or a seasoned pro willing to share info on how to catch the big one we provide a space for fishermen and women to connect and share their love of the outdoors through this amazing hobby! Feel free to check out some recent fishing reports below, or use the Locations tab to find more detailed info about a specific destination!</p>

            </div>

            <div className="homepage-reports">
                {reports.slice(0,3).map((reportObj) => {
                    return (
                        <Report
                            className="homepage-report"
                            key={reportObj.id}
                            reportObj={reportObj}
                            currentUser={currentUser} />
                    )
                })}

            </div>

            <button className="form-btn btn-primary"
                    onClick={handleClick}
            
            >See More...

            </button>
        </section>

    )
}