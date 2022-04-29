import React from 'react';
import Preloader from '../../Preloader'
import photo from '../../../images/users/no-photo.png'
import iconDownload from '../../../images/icon-download-white.svg'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus, myId, saveAvatar }) => {
    if (!profile) {
        return <Preloader className="preloader_place_profile" />
    }

    const chooseAvatarHandler = (evt) => {
        if (evt.target.files.length) {
            saveAvatar(evt.target.files[0]);
        }
    }

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
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
                        <span className="input__file-button-text">Выберите файл</span>
                    </label>
                </div>
            }
            <div className="profile__text">
                <h1 className="profile__name">{profile.fullName}</h1>
                <ProfileStatus status={status} updateStatus={updateStatus} myId={myId} />
            </div>
        </div>
    )
}

export default ProfileInfo;