import fishLogo from "../assets/Logo-png.png"

export const FlyBoxHeading = () => {

    return (
        <div className="homepage-header-container">
                                <img
                                    className="homepage-header"
                                    src="https://i.imgur.com/8HCqe5Q.jpeg"
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