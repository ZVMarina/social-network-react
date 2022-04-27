import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ myId }) => {
    return (
        <>
            <nav className="navigation">
                <li className="navigation__item">
                    <NavLink className="link navigation__link" to={`/profile/${myId}`}>Profile</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="link navigation__link" to="/dialogs">Messages</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="link navigation__link" to="/users">Users</NavLink>
                </li>
            </nav>
        </>

    )
}

export default Navbar;