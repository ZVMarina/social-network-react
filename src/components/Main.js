import image from '../images/main/people.png'

function Main() {
    return (
        <main className="main">
            <img className="main__image" src={image} />
            <section className="profile">
                <img className="profile__avatar"/>
                <h1 className="profile__name">Marina Z</h1>
                <p className="profile__about">I like cats. I want to learn React, bacause I need to find a good job.</p>
            </section>
            <section>
                <h2>My posts</h2>
                <p>new post</p>
            </section>
            <section>
                <h2>Hey, nobody love me?</h2>
            </section>
        </main>
    )
}

export default Main;