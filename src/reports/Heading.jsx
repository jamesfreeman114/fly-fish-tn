import fishLogo from "../assets/fish_logo.png"

export const Heading = () => {
    return (
        <div className="app-heading">
                    <div className="app-heading-circle">
                        <img className="app-logo" src={fishLogo} alt="No image found" />
                    </div>
        </div>
        
    )
}