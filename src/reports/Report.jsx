import "./AllReports.css"
import { Link } from "react-router-dom"
import { ButtonOptions } from "./ButtonOptions"

export const Report = ({ reportObj, userLike, showButtons=false, currentUser }) => {

    const report = userLike?.report || reportObj
    const location = userLike?.location || reportObj?.location
    const author = reportObj?.user 

    return (
        <section className="report">
            <div className="report-left-column">
                <div className="report-link">
                    <Link to={`/reports/${report.id}`}>{report.title} </Link>
                </div>
                <div className="report-subtitle">{report.date}</div>
            </div>
            <div className="report-right-column">
               
                {reportObj && author && 
                <div className="report-link">
                    <Link to={`/profile/${author?.id}`}>
                        {author?.name}
                    </Link>
                </div>}
                <div className="report-subtitle">{location?.name}</div>

                {showButtons && (
                    <ButtonOptions report={report} currentUser={currentUser} />
                )}

            </div>
        </section>
    )
}