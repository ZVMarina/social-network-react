import image from '../images/main/people.png'
import Posts from './Posts';

function Profile() {
    return (
        <>
            <section className="profile">
                <img className="profile__main-image" src={image} />
                <div className="profile__container">
                    <picture className="profile__picture">
                        <img className="profile__avatar" src="https://games.mail.ru/hotbox/content_files/news/2021/06/29/150b75b87bf64e07a2465f34aa08d7e7.jpg" />
                    </picture>
                    <div className="profile__text">
                        <h1 className="profile__name">Yennefer of Vengerberg</h1>
                        <p className="profile__about">I'm Yennefer of Vengerberg, born on Belleteyn in 1173, a sorceress. I love Geralt of Rivia's and Ciri.</p>
                    </div>
                </div>
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