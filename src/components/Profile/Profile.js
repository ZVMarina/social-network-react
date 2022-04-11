import image from '../../images/main/people.png';
import ProfileInfo from './ProfileInfo';
import React from 'react';
import PostsContainer from './PostsContainer';

function Profile(props) {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src='https://hb.bizmrg.com/cybersportru-media/97/973b06a7d96a83ddaa859ef024c38b7d.jpg' />
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