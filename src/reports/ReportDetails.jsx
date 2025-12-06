import { getReportById } from "../services/reportService"
import { useEffect, useState } from "react"
import "./AllReports.css"
import { useParams } from "react-router-dom"

export const ReportDetails = ({currentUser}) => {

  
    const [report, setReport] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getReportById(id).then((reportObj) => setReport(reportObj))

    },[])

    const handleLike = () => {console.log("Button clicked!")}
    

    return (
        <section className="report-details">
            <div>
                <span className="report-title">Title:</span>
                {report.title}
            </div>
             <div>
                <span className="report-title">Author</span>
                {report?.user?.name}
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
            <div className="btn-container">
                <button className="form-btn btn-primary"
                        onClick={handleLike}>
                Like
                </button>

            </div>
        </section>
    )


}