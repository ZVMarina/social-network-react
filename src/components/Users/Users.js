import React from "react";

function Users(props) {

    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/97ed5c47c17b0f5b515f53c4036e590c.jpg', followed: true, name: "Geralt of Rivia", status: "I'm killing monsters", country: "Rivia" },
                { id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1811900/pub_5d937d6ae3062c00b016bbd5_5d94144598fe7900b14fc924/scale_1200', followed: true, name: "Cirilla", status: "I'm killing monsters with Geralt", country: "Cintra" },
                { id: 3, photoUrl: 'https://zikurat.media/wp-content/uploads/2020/05/Gd3OP1l3_o.jpg', followed: false, name: "Triss Merigold", status: "I want to be Geralt's woman", country: "Temeria" },
                { id: 4, photoUrl: 'https://www.xgamers.ru/Handler1.ashx?id=4363', followed: false, name: "Zoltan Chivay", status: "It's a dog's life Geralt, I'll tell you that much", country: "Mahakam" },
            ]
        )
    }

    return (
        <section className="users">
            <h1 className="users__title">Users</h1>
            <ul className="users__list">
                {props.users.map(user =>
                    <li className="users__item">
                        <div className="users__follow-container">
                            <div className="users__avatar-container">
                                <img className="users__avatar" src={user.photoUrl}></img>
                            </div>
                            {user.followed
                                ? <button className="button users__button"
                                    onClick={() => { props.unFollow(user.id) }}>Follow</button>
                                : <button className="button users__button"
                                    onClick={() => { props.follow(user.id) }}>Unfollow</button>}
                        </div>
                        <div className="users__info-container">
                            <h2 className="users__name">{user.name}</h2>
                            <p className="users__status">{user.status}</p>
                            <p className="users__country">{user.country}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Users;