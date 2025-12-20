import { getReportById } from "../services/reportService"
import { useEffect, useState } from "react"
import "./AllReports.css"
import { useParams, Link } from "react-router-dom"
import { ButtonOptions } from "./ButtonOptions"

export const ReportDetails = ({ currentUser }) => {

    const [report, setReport] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getReportById(id).then((reportObj) => setReport(reportObj))
    }, [])

    return (
        <section className="report-details" id="parchment">
            <div className="detail-title">
                
                {report.title}
            </div>
            <div className="detail-subtitle"> 
                
                <Link to={`/profile/${report?.user?.id}`} className="detail-subtitle">
                {report?.user?.name}
                </Link>, {report?.location?.name}, {report?.date}
            </div>
            
            <div className="detail-body">
                
                {report.body}
            </div>
            <div className="report-likes-container">
                <span className="detail-subtitle">Likes: </span>
                {report.likes}

                <ButtonOptions 
                    currentUser={currentUser}
                    report={report}/>
            </div>

            
        </section>
    )
}