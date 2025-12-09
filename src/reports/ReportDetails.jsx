import { editReport, getReportById, likeReport, unlikeReport } from "../services/reportService"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AllReports.css"
import { useParams } from "react-router-dom"
import { getUserLikes } from "../services/userService"

export const ReportDetails = ({ currentUser }) => {


    const [report, setReport] = useState([])
    const [likes, setLikes] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const currentUserId = currentUser.id

    const userLikedReport = likes.find(like => like.reportId === parseInt(id))

    useEffect(() => {
        getReportById(id).then((reportObj) => setReport(reportObj))

    }, [])

    useEffect(()=> {
        getUserLikes(currentUserId).then((allLikes) => setLikes(allLikes))
    })

    const handleEdit = () => { navigate(`../${report.id}/edit`) }

    const handleLike = (event) => {
        event.preventDefault()

        const likedReport = {
            id: report.id,
            userId: report.userId,
            locationId: report.locationId,
            date: report.date,
            title: report.title,
            body: report.body,
            likes: report.likes + 1
        }

        const newLike = {
            userId: currentUserId,
            reportId: report.id
        }

        editReport(likedReport)
            .then(() => { likeReport(newLike) })
            .then(() => { navigate(`/favorites`) })

    }

    const handleUnlike = (event) => {
        event.preventDefault()

        const unlikedReport = {
            id: report.id,
            userId: report.userId,
            locationId: report.locationId,
            date: report.date,
            title: report.title,
            body: report.body,
            likes: report.likes - 1
        }

         editReport(unlikedReport)
            .then(() => { unlikeReport(userLikedReport.id) })
            .then(() => { navigate(`/favorites`) })

    }
    




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

                {report.userId === currentUser.id ?
                    (<button className="btn-container btn-primary"
                        onClick={handleEdit}
                    >Edit</button>) : (
                        ""
                    )}

                {report.userId != currentUser.id &&
                    !userLikedReport ?
                    (<button className="form-btn btn-primary"
                        onClick={handleLike}>
                        Like</button>) : ("")}
               
                {report.userId != currentUser.id &&
                    userLikedReport ?
                    (<button className="btn-container btn-primary"
                        onClick={handleUnlike}

                    >Unlike</button>) : (
                        ""
                    )}
            </div>

        </section>
    )


}