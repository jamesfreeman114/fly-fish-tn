import { useParams } from "react-router-dom"
import "./Locations.css"
import { useEffect, useState } from "react"
import { getLocationById } from "../services/locationService"
import { getReportByLocationId } from "../services/reportService"
import { Report } from "../reports/Report"
import { getDetailedForecast, getTheForecastByGPS } from "../services/weatherService"


export const LocationDetails = ({ currentUser }) => {

    const { id } = useParams()
    const [location, setLocation] = useState({})
    const [reports, setReports] = useState([])
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        getLocationById(id).then((locArr) => setLocation(locArr))
    }, [id])

    useEffect(() => {
        getReportByLocationId(id).then((arr) => setReports(arr))
    }, [id])

    useEffect(() => {
        if (location.lat && location.lon) {
            // Get 6 periods (about 3 days worth of forecasts)
            getTheForecastByGPS(location.lat, location.lon, 3).then((forecasts) => setForecast(forecasts))
        }
    }, [location])



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

         <div>
            <h3 className="title">Weather Forecast</h3>
            </div>
            <div className="weather-reports">
            {Array.isArray(forecast) && forecast.length > 0 ? (
                forecast.map((period, index) => (
                    <div key={index} className="weather-report">
                        <h3 className="weather-heading">{period.name}</h3>
                        <p>{period.temperature}°{period.temperatureUnit} - {period.shortForecast}</p>
                        <p>{period.detailedForecast}</p>
                    </div>
                ))
            ) : (
                <p className="weather-report">{typeof forecast === 'string' ? forecast : 'Loading forecast...'}</p>
            )}
            
        </div>

        <div className="all-reports">
            <h3 className="title">Recent Reports:</h3>
            {reports.map((reportObj) => {
                return (
                    <Report
                        className="report"
                        key={reportObj.id}
                        reportObj={reportObj}
                        currentUser={currentUser}
                    />)
            })}
        </div>




    </>
)
}