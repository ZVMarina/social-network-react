import React from 'react';
import image from '../../images/main/people-2.png';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    myId={props.myId}
                />
            </section>
            <PostsContainer store={props.store} />
        </>
    )
}

export default Profile;