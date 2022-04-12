import image from '../../images/main/people-2.png';
import ProfileInfo from './ProfileInfo';
import React from 'react';
import PostsContainer from './PostsContainer';

function Profile(props) {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <ProfileInfo
                    url="https://games.mail.ru/hotbox/content_files/news/2021/06/29/150b75b87bf64e07a2465f34aa08d7e7.jpg"
                    name="Yennefer of Vengerberg"
                    about="I'm Yennefer of Vengerberg, born on Belleteyn in 1173, a sorceress. I love Geralt of Rivia's and Ciri."
                />
            </section>
            <PostsContainer store={props.store} />
        </>
    )
}

export default Profile;