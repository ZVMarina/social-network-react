import React, { useState } from 'react';
import Preloader from '../../Preloader'
import photo from '../../../images/users/no-photo.png'
import iconDownload from '../../../images/icon-download-white.svg'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus, myId, saveAvatar }) => {
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
            <div className="profile__content">
                <h1 className="profile__name">{profile.fullName}</h1>
                <ProfileStatus className="profile__status" status={status} updateStatus={updateStatus} myId={myId} />
                <div className="profile__about-container">
                    <b className="profile__subtitle">About me: </b>
                    <p className="profile__info profile__about">I like cats</p>
                </div>
                <div className="profile__job-container">
                    <b className="profile__subtitle">Looking for a job: </b>
                    <p className=" profile__info profile__job">Yes</p>
                </div>
                <div className="profile__skills-container">
                    <b className="profile__subtitle">My skills: </b>
                    <p className=" profile__info profile__skills">Git, React (Hooks), Redux, JavaScript, REST API</p>
                </div>
                <div className="profile__contacts-container">
                    <b className="profile__subtitle">Contacts: </b>
                    <p className=" profile__info profile__contacts">Git: https://github.com/ZVMarina</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;