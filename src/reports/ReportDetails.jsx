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
            <div>
                <span className="report-title">Title:</span>
                {report.title}
            </div>
            <div>
                <span className="report-title">Author</span>
                <Link to={`/profile/${report?.user?.id}`}>
                {report?.user?.name}
                </Link>
            </div>
            <div>
                <span className="report-title">Location:</span>
                {report?.location?.name}
            </div>
            <div>
                <span className="report-title">Body:</span>
                {report.body}
            </div>
            <div>
                <span className="report-title">Likes:</span>
                {report.likes}
            </div>

            <ButtonOptions 
                    currentUser={currentUser}
                    report={report}/>
        </section>
    )
}