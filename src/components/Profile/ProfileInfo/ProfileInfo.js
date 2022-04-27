import React from 'react';
import Preloader from '../../Preloader'
import photo from '../../../images/users/no-photo.png'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus, myId }) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
                <source srcSet={profile.photos.small} media="(max-width: 535px)" />
                <img className="profile__avatar" src={profile.photos.large != null ? profile.photos.large : photo} />
            </picture>
            <div className="profile__text">
                <h1 className="profile__name">{profile.fullName}</h1>
                <ProfileStatus status={status} updateStatus={updateStatus} myId={myId} />
            </div>
        </div>
    )
}

export default ProfileInfo;