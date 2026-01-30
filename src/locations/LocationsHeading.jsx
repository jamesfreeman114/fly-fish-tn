import fishLogo from "../assets/Logo-png.png"


export const LocationsHeading = () => {
    return (

         <div className="homepage-header-container">
                                        <img
                                            className="homepage-header"
                                            src={"https://i.imgur.com/FYx6eoV.jpeg"}
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