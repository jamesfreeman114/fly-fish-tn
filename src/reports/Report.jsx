import { Link } from "react-router-dom"
import "./AllReports.css"
import { ButtonOptions } from "./ButtonOptions"

export const Report = ({ reportObj, userLike, currentUser}) => {
      
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
                {/* <ButtonOptions report={report}
                               currentUser={currentUser}/> */}
        </div>


    )

}