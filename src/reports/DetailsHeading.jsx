import fishLogo from "../assets/Logo-png.png"
import "./AllReports.css"

export const DetailsHeading = () => {
    return (
         <div className="homepage-header-container">
                                <img
                                    className="homepage-header"
                                    src="https://i.imgur.com/WSX1pgj.jpeg"
                                    alt="image">
                
                                </img>
                
                                <img
                                    className="homepage-logo"
                                    src={fishLogo}>
                                </img>
                            </div>
            )
    
}