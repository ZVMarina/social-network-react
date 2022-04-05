import image from '../images/main/people.png'
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

function Profile() {

    const postsData = [
        { post: "Hey, is anybody here?" },
        { post: "It's my first post" }
    ]

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
                <input className="posts__input" placeholder='your news...' />
                <button className="posts__button">Send</button>
                <ul className="posts__item-list">
                    {postsData.map(postItem => <Posts post={postItem.post} />)}
                </ul>
            </section>
        </>
    )
}

export default Profile;