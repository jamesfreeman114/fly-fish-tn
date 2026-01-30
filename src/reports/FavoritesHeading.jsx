import fishLogo from "../assets/Logo-png.png"
import "./AllReports.css"

export const FavoritesHeading = () => {
    return (
         <div className="homepage-header-container">
                                <img
                                    className="homepage-header"
                                    src="https://i.imgur.com/MrohLjG.jpeg"
                                    alt="image"
                                    referrerpolicy="no-referrer">
                
                                </img>
                
                                <img
                                    className="homepage-logo"
                                    src={fishLogo}>
                                </img>
                            </div>
            )
    
}