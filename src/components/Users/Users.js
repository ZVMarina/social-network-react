import * as axios from "axios";
import React from "react";
import photo from '../../images/users/no-photo2.png'

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render = () => {
        return (
            <section className="users">
                <h1 className="users__title">Users</h1>
                <button className="button users__get-button" onClick={this.getUsers}>Get users</button>
                <ul className="users__list">
                    {this.props.users.map(user =>
                        <li className="users__item">
                            <div className="users__follow-container">
                                <div className="users__avatar-container">
                                    <img className="users__avatar" src={user.photos.small != null ? user.photos.small : photo}></img>
                                </div>
                                {user.followed
                                    ? <button className="button users__button"
                                        onClick={() => { this.props.unFollow(user.id) }}>Follow</button>
                                    : <button className="button users__button"
                                        onClick={() => { this.props.follow(user.id) }}>Unfollow</button>}
                            </div>
                            <div className="users__info-container">
                                <h2 className="users__name">{user.name}</h2>
                                <p className="users__status">{user.status != null ? user.status : "There should be a status here"}</p>
                                <p className="users__country">{user.country ? user.country : "There should be a country here"}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default Users;