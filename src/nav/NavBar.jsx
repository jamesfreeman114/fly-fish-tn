import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (<ul className="navbar">
        <li className="navbar-item">
            <Link to='/profile' className="navbar-link">Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to='/newreport' className="navbar-link">New Report</Link>
        </li>
        <li className="navbar-item">
            <Link to='/favorites' className="navbar-link">Favorites</Link>
        </li>
        {localStorage.getItem("fly_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("fly_user")
                        navigate("/", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        ) : (
            ""
        )}

    </ul>

    )

}

