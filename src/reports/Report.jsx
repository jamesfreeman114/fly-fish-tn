import { Link } from "react-router-dom"
import "./AllReports.css"

export const Report = ({ reportObj, userLike}) => {
      
    const report = userLike?.report || reportObj
    const user = userLike?.user || reportObj?.user
    const location = userLike?.location || reportObj?.location

    return (
        <div className="report">
            <div className="report-left-column">
                <h2 className="report-title">{report.title}</h2>
                <div className="report-subtitle">{report.date}</div>
            </div>
            <div className="report-right-column">
                <div className="report-link">
                    {user.name}
                </div>
                <div className="report-subtitle">{location.name}</div>
            </div>
        </div>


    )

}