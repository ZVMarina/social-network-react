import React, { useState } from 'react';
import Preloader from '../../Preloader'
import photo from '../../../images/users/no-photo.png'
import iconDownload from '../../../images/icon-download-white.svg'
import { useParams } from 'react-router-dom';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, myId, saveAvatar, saveProfile }) => {
    const userId = Number(useParams().userId);

    const [editMode, setEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
                {isLoading && <Preloader className="preloader_place_avatar" />}
                <source srcSet={profile.photos.small || photo} media="(max-width: 535px)" />
                <img className="profile__avatar" src={profile.photos.large || photo} />
            </picture>
            {myId === profile.userId &&
                <div className="input__file-wrapper" >
                    <input
                        name="file"
                        type="file" id="input__file"
                        className="input input__file"
                        onChange={chooseAvatarHandler}
                        multiple
                    />
                    <label htmlFor="input__file" className="button input__file-button">
                        <span className="input__file-icon-wrapper"><img className="input__file-icon" src={iconDownload} alt="Выбрать файл" width="25" /></span>
                        <span className="input__file-button-text">Select a file</span>
                    </label>
                </div>
            }
            {editMode ? <ProfileDataForm profile={profile} saveProfile={saveProfile} /> : <ProfileData
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                myId={myId}
                activeteEditMode={activeteEditMode}
            />}
        </div>
    )
}

export default ProfileInfo;