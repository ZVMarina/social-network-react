import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = ({ profile, status, updateStatus, myId, store, saveAvatar, saveProfile }) => {
    return (
        <>
            <section className="profile">
                <div className="profile__main-image"></div>
                <ProfileInfo
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    myId={myId}
                    saveAvatar = {saveAvatar}
                    saveProfile = {saveProfile}
                />
            </section>
            <PostsContainer store={store} />
        </>
    )
}

export default Profile;