import React from "react";

function ProfileStatus(props) {
    return (
        <div className="profile__status-container">
            <p className="profile__status">{props.status}</p>
            <input className="profile__status-input" value={props.status}></input>
        </div>
    )
}

export default ProfileStatus;