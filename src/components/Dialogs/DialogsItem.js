import React from 'react';
import { NavLink } from "react-router-dom";

const DialogsItem = ({ id, name }) => {
    let path = "/dialogs/" + id

    return (
        <li className="dialogs__item dialogs__item_type_dialog">
            <NavLink className="link dialogs__link" to={path}>
                <span className="dialogs__text">{name}</span>
            </NavLink>
        </li>
    )
}

export default DialogsItem;
