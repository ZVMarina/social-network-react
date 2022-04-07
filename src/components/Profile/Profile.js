import image from '../../images/main/people.png';
import ProfileInfo from './ProfileInfo';
import Posts from './Posts'
import React from 'react';

function Profile(props) {
    const postsElements = props.state.postsData.map(postItem => <Posts post={postItem.post} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        const postText = newPostElement.current.value;
        props.addPost(postText);
    }

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
            <section className="posts">
                <h2 className="posts__title">My posts</h2>
                <input className="posts__input" placeholder='your news...' ref={newPostElement} />
                <button className="posts__button" onClick={addPost}>Send</button>
                <ul className="posts__item-list">
                    {postsElements}
                </ul>
            </section>
        </>
    )
}

export default Profile;