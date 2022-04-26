import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/header/logo_light.svg"

const Header = (props) => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
            {props.isAuth
                ? <div className="header__login-container">
                    <NavLink className="link header__login-link" to={'/profile/' + props.myId}>{props.login}</NavLink>
                    <div className="header__line"> | </div>
                    <button className="link header__logout-link" onClick={props.logout}>Logout</button>
                </div>
                : <NavLink className="link header__login-link" to={'/login '}>Login</NavLink>}
        </header>
    )
}

export default Header;