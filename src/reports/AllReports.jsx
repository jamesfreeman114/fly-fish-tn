import { useState, useEffect } from "react";
import { getAllReports } from "../services/reportService";
import { Report } from "./Report";
import { getAllLocations } from "../services/locationService";
import "./AllReports.css"
import { Heading } from "./Heading";
import { LocationsDropdown } from "./Dropdown";

export const AllReports = ({ currentUser }) => {

    const [reports, setReports] = useState([])
    const [filteredReports, setFilteredReports] = useState([])
    const [locations, setLocations] = useState([])
    const [locationId, setLocationId] = useState(0)

    const getAndSetReports = () => { getAllReports().then((allReports) => setReports(allReports)) }

    useEffect(() => { getAndSetReports() }, [])
    useEffect(() => { getAllLocations().then((allLocations) => setLocations(allLocations)) }, [])

    useEffect(() => {
        if (locationId) {
            const locationMatch = reports.filter((report) => {
                return report.locationId === locationId
            })
            setFilteredReports(locationMatch)
        }
        else {
            setFilteredReports(reports)
        }
    }, [reports, locationId])

    return (
        <>
            < Heading />

            <LocationsDropdown
                locations={locations}
                setLocationId={setLocationId} />


            <section className="all-reports">
                {filteredReports.map((reportObj) => {
                    return (

                        

                            <Report 
                                    className="report"
                                    key={reportObj.id}
                                    reportObj={reportObj} 
                                    currentUser={currentUser} />
                                    
                       

                    )
                })}

            </section>
        </>


    )
}