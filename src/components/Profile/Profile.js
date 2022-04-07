import image from '../../images/main/people.png';
import ProfileInfo from './ProfileInfo';
import Posts from './Posts'
import React from 'react';
import { addPost } from '../../redax/state';

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
            <Posts addPost={props.addPost} state={props.state}/>
        </>
    )
}

export default Profile;