import React, { useEffect, useState } from "react";
import Preloader from "../../Preloader";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activeteEditMode = () => {
        setEditMode(true);
    }

    const deactiveteEditMode = () => {
        setEditMode(false);
        setIsLoading(true);

        props.updateStatus(status)
            .then(() => {
                setIsLoading(false);
            })
    }

    const changeStatusHandler = (evt) => {
        setStatus(evt.currentTarget.value);
    }

    return (
        <div className="profile__status-container">
            {!editMode &&
                <p className="profile__status" onClick={activeteEditMode}>{props.status || 'Status should be here'}</p>
            }
            {editMode &&
                <input className="profile__status-input"
                    onBlur={deactiveteEditMode}
                    value={status}
                    onChange={changeStatusHandler}
                    autoFocus={true}>
                </input>
            }
            {isLoading && <Preloader className="profile__preloader" />}
        </div>
    )
}

export default ProfileStatus;