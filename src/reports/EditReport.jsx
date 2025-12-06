import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getReportById } from "../services/reportService"
import { getAllLocations } from "../services/locationService"
import { editReport } from "../services/reportService"

export const EditReport = () => {

    const [report, setReport] = useState({})
    const [locations, setLocations] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()

    const handleSave = (event) => {

        event.preventDefault()
        if (report.title && report.body && report.locationId) {
            const editedReport = {
            
            id: report.id,
            title: report.title,
            body: report.body,
            date: report.date,
            locationId: report.locationId,
            userId: report.userId,
            likes: report.likes

        }
        editReport(editedReport).then(()=>{navigate("/")})


        } else {
            window.alert("Please complete the form!")
        }
    }

    useEffect(()=>{
        getReportById(id).then((reportObj) => setReport(reportObj))
    },[])

    useEffect(()=>{
        getAllLocations().then((locArr) => setLocations(locArr))
    })

    return (
        <form className="container">
            <h2>Edit Report</h2>
            <fieldset>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={report?.title || ""}
                        onChange= {(event) => {
                            const copy = {... report}
                            copy.title = event.target.value
                            setReport(copy)
                        }}

                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-dropdown">
                <label>Location: </label>
                <select
                    value ={report?.locationId || ""}
                    onChange={(event)=> {
                                    const copy = {...report}
                                    copy.locationId = parseInt(event.target.value)
                                    setReport(copy)
                                }}
                >
                    <option value="">Select a Location</option>
                    {locations.map((location) => {
                        return (
                            <option
                                className="post-option"
                                key={location.id}
                                value={location.id}
                                
                            >
                                {location.name}
                            </option>
                        )
                    })}
                </select>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Body: </label>
                    <input
                        type="text"
                        value={report?.body || ""}
                        onChange= {(event) => {
                            const copy = {... report}
                            copy.body = event.target.value
                            setReport(copy)
                        }}

                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <button className="btn-primary"
                    onClick={handleSave}

                >
                    Save
                </button>
            </fieldset>
            

        </form>
    )

}