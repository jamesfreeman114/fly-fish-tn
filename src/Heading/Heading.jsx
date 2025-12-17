import fishLogo from "../assets/Logo-png.png"

export const Heading = () => {
    return (
         <div className="homepage-header-container">
                        <img
                            className="homepage-header"
                            src="https://i.imgur.com/kRmKAHx.jpeg"
                            alt="image">
        
                        </img>
        
                        <img
                            className="homepage-logo"
                            src={fishLogo}>
                        </img>
                    </div>
    )
}