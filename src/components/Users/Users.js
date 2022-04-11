import React from "react";

function Users(props) {
    return (
        <section className="users">
            <h1 className="users__title">Users</h1>
            <ul className="users__list">
                {props.users.map(user =>
                    <li className="users__item">
                        <div className="users__follow-container">
                            <img className="users__avatar" src={user.photoUrl}></img>
                            <button className="users__button">Follow</button>
                        </div>
                        <div className="users__info-container">
                                <h2>{user.name}</h2>
                                <p>{user.status}</p>
                                <p>{user.from}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Users;