import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = ({ profile, status, updateStatus, myId, store }) => {
    return (
        <>
            <section className="profile">
                <div className="profile__main-image"></div>
                <ProfileInfo
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    myId={myId}
                />
            </section>
            <PostsContainer store={store} />
        </>
    )
}

export default Profile;