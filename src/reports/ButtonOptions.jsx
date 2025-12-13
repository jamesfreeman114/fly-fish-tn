import { getUserLikes, likeReport, unlikeReport } from "../services/userLikesService"
import { editReport, deleteReport } from "../services/reportService"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AllReports.css"


export const ButtonOptions = ({ report, currentUser }) => {

    const [likes, setLikes] = useState([])
    const navigate = useNavigate()
    const currentUserId = currentUser.id
    const userLikedReport = likes.find(like => like.reportId === report.id)

    const getAndSetUserLikes = () => {
         getUserLikes(currentUserId).then((allLikes) => setLikes(allLikes))}

    useEffect(() => { getAndSetUserLikes() }, [])

    const handleEdit = (event) => {
        event.preventDefault()
        navigate(`/reports/${report.id}/edit`)}

    const handleDelete = (event) => {
        event.preventDefault()
        deleteReport(report.id).then(() => navigate(`/`))}

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
            reportId: report.id,
            locationId: report.locationId
        }

        editReport(likedReport)
            .then(() => { likeReport(newLike) })
            .then(() => { getAndSetUserLikes() })
            .then(() => {navigate("/favorites")})

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
            .then(() => { getAndSetUserLikes() })
            .then(() => {navigate("/")})

    }

    return (
    <div className="report-btn">
        {report.userId === currentUser.id ?
            (<button className="btn-primary"
                onClick={handleEdit}
            >Edit</button>) : ("")}

        {report.userId === currentUser.id ?
            (<button className="btn-primary"
                onClick={handleDelete}
            >Delete</button>) : ("")}

        {report.userId != currentUser.id &&
            !userLikedReport ?
            (<button className="btn-primary"
                onClick={handleLike}
            >Like</button>) : ("")}

        {report.userId != currentUser.id &&
            userLikedReport ?
            (<button className="btn-primary"
                onClick={handleUnlike}
            >Unlike</button>) : ("")}
    </div>
    )
}