export const Fly = ( {fly}) => {
    return (
        
                          
        <section className="location">
            
            <div className="location-title">{fly.name}</div>
            
            <img 
                src={fly.imageUrl} 
                alt={fly.name}
                className="location-image"
            />
            <div className="location-subtitle">{fly.type}</div>
            
            
        </section>
        
    )
}