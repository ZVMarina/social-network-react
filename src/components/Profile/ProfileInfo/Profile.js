import image from '../../../images/main/people-2.png';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import React from 'react';
import PostsContainer from '../Posts/PostsContainer';

function Profile(props) {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus} />
            </section>
            <PostsContainer store={props.store} />
        </>
    )
}

export default Profile;