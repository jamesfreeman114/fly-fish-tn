import fishLogo from "../assets/fish_logo.png"
import "./AllReports.css"

export const Heading = () => {
    return (
        <div className="app-heading">
            <h2 className="app-title">Tennessee Fly Fishing Guide</h2>
            <div className="app-heading-circle">
                <img className="app-logo" src={fishLogo} alt="No image found" />
            </div>
        </div>

    )
}