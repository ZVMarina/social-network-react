import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ myId }) => {
    return (
        <>
            <nav className="navigation">
                <li className="navigation__item">
                    <NavLink className="link link_place_novigation" to={`/profile/${myId}`}>Profile</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="link link_place_novigation" to="/dialogs">Messages</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink className="link link_place_novigation" to="/users">Users</NavLink>
                </li>
            </nav>
        </>

    )
}

export default Navbar;