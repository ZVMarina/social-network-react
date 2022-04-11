import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navigation">
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/profile">Profile</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/dialogs">Messages</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/news" >News</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/music">Music</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/users">Users</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="navigation__link" to="/settings">Settings</NavLink>
                </li>
            </nav>
        </>

    )
}

export default Navbar;