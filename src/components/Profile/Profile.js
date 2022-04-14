import image from '../../images/main/people-2.png';
import ProfileInfo from './ProfileInfo';
import React from 'react';
import PostsContainer from './PostsContainer';

function Profile(props) {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <ProfileInfo profile={props.profile}/>
            </section>
            <PostsContainer store={props.store} />
        </>
    )
}

export default Profile;