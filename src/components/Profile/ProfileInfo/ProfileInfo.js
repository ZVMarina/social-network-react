import React, { useState } from 'react';
import Preloader from '../../Preloader'
import photo from '../../../images/no-photo.png'
import iconDownload from '../../../images/icon-download-white.svg'
import { useParams } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, myId, saveAvatar, saveProfile }) => {
    const userId = Number(useParams().userId);

    const [editMode, setEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (userId) {
        console.log(userId);
        console.log("myId", myId);
    }


    if (!profile) {
        return <Preloader className="preloader_place_profile" />
    }

    const chooseAvatarHandler = (evt) => {
        if (evt.target.files.length) {
            setIsLoading(true);

            saveAvatar(evt.target.files[0])
                .then(() => {
                    setIsLoading(false);
                })
        }
    }

    const activeteEditMode = () => {
        if (myId === userId) {
            setEditMode(true)
        }
    }

    const deactiveteEditMode = () => {
        setEditMode(false);
    }

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
                {isLoading && <Preloader className="preloader_place_avatar" />}
                <source srcSet={profile.photos.small || photo} media="(max-width: 535px)" />
                <img className="profile__avatar" src={profile.photos.large || photo} />
            </picture>
            {myId === profile.userId &&
                <div className="avatar-file" >
                    <input
                        name="file"
                        type="file" id="file"
                        className="avatar-file__input"
                        onChange={chooseAvatarHandler}
                        multiple
                    />
                        <label htmlFor="file" className="button avatar-file__button">
                            <span className="avatar-file__icon-wrapper">
                                <img className="avatar-file__icon" src={iconDownload} alt="Выбрать файл" width="25" />
                            </span>
                            <span className="avatar-file__button-text">Select a file</span>
                        </label>
                </div>
            }
            <ProfileData
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                myId={myId}
                activeteEditMode={activeteEditMode}
            />
            {editMode &&
                <ProfileDataForm
                    userId={userId}
                    profile={profile}
                    saveProfile={saveProfile}
                    deactiveteEditMode={deactiveteEditMode}
                />
            }
        </div>
    )
}

export default ProfileInfo;