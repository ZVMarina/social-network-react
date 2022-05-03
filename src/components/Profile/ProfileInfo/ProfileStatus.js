import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../Preloader";

const ProfileStatus = ({ status, myId, updateStatus }) => {
    const userId = Number(useParams().userId);

    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatus] = useState(status);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setStatus(status);
    }, [status])

    const activeteEditMode = () => {
        if (myId === userId) {
            setEditMode(true);
        }
    }

    const deactiveteEditMode = () => {
        setEditMode(false);
        setIsLoading(true);

        updateStatus(statusText)
            .then(() => {
                setIsLoading(false);
            })
    }

    const changeStatusHandler = (evt) => {
        setStatus(evt.currentTarget.value);
    }

    return (
        <div className="profile__status-container">
            <b className="subtitle subtitle_place_data">Status:</b>
            {!editMode &&
                <p
                    className="profile__text profile__text_theme_status"
                    onClick={activeteEditMode}>{status || 'Status should be here'}
                </p>
            }
            {editMode &&
                <input
                    className="profile__status-input"
                    onBlur={deactiveteEditMode}
                    value={statusText}
                    onChange={changeStatusHandler}
                    autoFocus={true}>
                </input>
            }
            {isLoading && <Preloader className="preloader_place_status" />}
        </div>
    )
}

export default ProfileStatus;