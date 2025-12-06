import { useState, useEffect } from "react"
import { getAllLocations } from "../services/locationService"
import { createReport } from "../services/reportService"
import { useNavigate } from "react-router-dom"
import "./Form.css"


export const NewReportForm = ({ currentUser }) => {

    const navigate = useNavigate()
    const currentDate = new Date()
    const userId = currentUser.id

    const [locations, setLocations] = useState([])
    const [locationId, setLocationId] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSave = (event) => {
        event.preventDefault()

        const newReport = {
            title: title,
            locationId: locationId,
            userId: userId,
            body: body,
            date: currentDate,
            likes: 0
        }

        createReport(newReport).then(() =>{
            navigate(`/`)
        })

       

    }


    useEffect(() => {
        getAllLocations().then((locArr) => { setLocations(locArr) })
    }, [])




    return (
        <form className="container">
            <h2>New Report Form</h2>
            <fieldset>
                <div>
                    <label>Title: </label>
                    <input
                            type = "text"
                            placeholder="Title"
                            onChange={(event) => setTitle(event.target.value)}
                    ></input>
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Location: </label>
                    <select onChange={(event) => {
                        const selectedId = parseInt(event.target.value)
                        setLocationId(selectedId)
                    }}>
                        <option value="">Select a Location:</option>
                        {locations.map((location) => {
                            return (
                                <option
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
                            type = "text"
                            placeholder="Body"
                            onChange={(event) => setBody(event.target.value)}
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