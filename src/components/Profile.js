import image from '../images/main/people.png'
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

function Profile() {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <ProfileInfo
                    url="https://games.mail.ru/hotbox/content_files/news/2021/06/29/150b75b87bf64e07a2465f34aa08d7e7.jpg"
                    name="Yennefer of Vengerberg"
                    about="'m Yennefer of Vengerberg, born on Belleteyn in 1173, a sorceress. I love Geralt of Rivia's and Ciri."
                />
            </section>
            <section className="posts">
                <h2 className="posts__title">My posts</h2>
                <input className="posts__input" placeholder='your news...' />
                <button className="posts__button">Send</button>
                <ul className="posts__item-list">
                    <Posts post="Hey, is anybody here?" />
                    <Posts post="It's my first post" />
                </ul>
            </section>
        </>
    )
}

export default Profile;