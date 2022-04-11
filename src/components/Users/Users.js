import React from "react";

function Users(props) {
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
                                ? <button className="button users__button">Unfollow</button>
                                : <button className="button users__button">Follow</button>}
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