import "./AllReports.css"

export const Report = ({ reportObj }) => {
    return (
        <div className="report">
            <h2 className="report-title">{reportObj.title}</h2>
            <div className="report-subtitle">{reportObj.date}</div>
        </div>
    )

}