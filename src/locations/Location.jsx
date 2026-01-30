import "./Locations.css"


export const Location = ( {location}) => {

    return (
        
                          
        <section className="location">
            
            <div className="location-title">{location.name}</div>
            
            <img 
                src={location.imageUrl} 
                alt={location.name}
                className="location-image"
                referrerpolicy="no-referrer"

            />
            <div className="location-subtitle">{location.type}</div>
            
            
        </section>
        
    )

}