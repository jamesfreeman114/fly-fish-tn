import { useParams } from "react-router-dom"
import "./Locations.css"
import { useEffect, useState } from "react"
import { getLocationById } from "../services/locationService"
import { getReportByLocationId } from "../services/reportService"
import { Report } from "../reports/Report"


export const LocationDetails = ( {currentUser}) => {

    const {id} = useParams()
    const [location, setLocation] = useState({})
    const [reports, setReports] = useState([])

    useEffect(()=>{
        getLocationById(id).then((locArr) => setLocation(locArr)) 
    },[])

    useEffect(()=>{
        getReportByLocationId(id).then((arr)=>setReports(arr))
    },[])

    return (
        <>
         <section className="location-container">
            
            <div className="location-title">{location.name}</div>
            <div className="location-subtitle">{location.type}</div>
            
            <img 
                src={location.imageUrl} 
                alt={location.name}
                className="location-detail-image"
            />
            
            <div className="location-subtitle">{location.description}</div>

             </section>

            <div className="all-reports">
                        <h3 className="title">Recent Reports:</h3>
                        {reports.map((reportObj) => {
                            return (
                                <Report 
                                        className="report"
                                        key={reportObj.id}
                                        reportObj={reportObj}
                                        currentUser={currentUser} 
                                         />)})}
                    </div>

            
            
       
        </>
    )
}