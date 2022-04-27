import React from 'react';
import image from '../../images/main/people-2.png';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = ({ profile, status, updateStatus, myId, store }) => {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
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