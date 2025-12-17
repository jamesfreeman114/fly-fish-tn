import fishLogo from "../assets/Logo-png.png"
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css"

export const NavBar = ({ currentUser }) => {

    const navigate = useNavigate()

    return (
        <div className="navbar-container">
            <img
                className="navbar-logo"
                src={fishLogo}>
            </img>



            <ul className="navbar-links">

                <li className="navbar-item">
                    <Link to={`/profile/${currentUser.id}`} className="navbar-link">Profile</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/' className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/new' className="navbar-link">New</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/reports' className="navbar-link">All Reports</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/favorites' className="navbar-link">Favorites</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/locations' className="navbar-link">Locations</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/flies' className="navbar-link">Fly Box</Link>
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
        </div>

    )

}

