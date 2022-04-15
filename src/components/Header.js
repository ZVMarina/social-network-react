import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/header/logo_light.svg"

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
            <div className="header__login-container">
                <NavLink className="navigation__link header__login-link" to={'/login '}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;