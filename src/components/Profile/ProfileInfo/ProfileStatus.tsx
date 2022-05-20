import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../Preloader";

type PropsType = {
    status: string
    myId: number
    updateStatus: (statusText: string) => Promise<void>
}

const ProfileStatus: React.FC<PropsType> = ({ status, myId, updateStatus }) => {
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

    const changeStatusHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setStatus(evt.currentTarget.value);
    }

    return (
        <div className="status">
            <b className="subtitle subtitle_place_data">Status:</b>

            {!editMode &&
                <div className="status__text-container">
                    {isLoading && <Preloader className="preloader_place_status" />}
                    <p
                        className="text text_place_status"
                        onClick={activeteEditMode}>{status || 'Status should be here'}
                    </p>
                </div>

            }

            {editMode &&
                <input
                    className="status__input"
                    onBlur={deactiveteEditMode}
                    value={statusText}
                    onChange={changeStatusHandler}
                    autoFocus={true}>
                </input>
            }
        </div>
    )
}

export default ProfileStatus;