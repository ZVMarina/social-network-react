import image from '../images/main/people.png'

function Main() {
    return (
        <main className="main">
            <img className="main__image" src={image} />
            <section className="profile">
                <picture className="profile__picture">
                    <img className="profile__avatar" src="https://games.mail.ru/hotbox/content_files/news/2021/06/29/150b75b87bf64e07a2465f34aa08d7e7.jpg" />
                </picture>
                <div className="profile__text">
                    <h1 className="profile__name">Marina Z</h1>
                    <p className="profile__about">I like cats. I want to learn React, bacause I need to find a good job.</p>
                </div>
            </section>
            <section className="posts">
                <h2 className="posts__title">My posts</h2>
                <input className="posts__input" placeholder='your news...'></input>
                <button className="posts__button">Send</button>
                <ul className="posts__item-list">
                    <li className="posts__item">
                        <span className="posts__text">Hey, nobody love me?</span>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main;