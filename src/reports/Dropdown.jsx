export const LocationsDropdown = ( {locations, setLocationId}) => {

    return (
        <div className="report-dropdown">
            <label className="dropdown-label">Select Location:
            <select
                onChange={(event) => {
                    setLocationId(parseInt(event.target.value))}}>
                {locations.map((location) => {
                    return (
                        <option
                            className="report-option"
                            key={location.id}
                            value={location.id}
                        >
                            {location.name}
                        </option>
                    )
                })}
            </select>
            </label>
        </div>
    )

}