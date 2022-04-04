import image from '../images/main/people.png'

function Main() {
    return (
        <main className="main">
            <img className="main__image" src={image} />
            <section className="profile">
                <img className="profile__avatar" />
                <h1 className="profile__name">Marina Z</h1>
                <p className="profile__about">I like cats. I want to learn React, bacause I need to find a good job.</p>
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