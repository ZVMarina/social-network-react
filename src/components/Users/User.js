import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../images/no-photo.png';

const User = ({ user, isAuth, followThunk, unfollowThunk, buttonDisabled }) => {
    return (
        <li className="users__item">
            <div className="users__follow-container">
                <div className="users__avatar-container">
                    <NavLink className="navigation__link" to={'/profile/' + user.id}>
                        <img
                            className="users__avatar"
                            src={user.photos.small != null ? user.photos.small : photo}>
                        </img>
                    </NavLink>
                </div>
                {
                    isAuth && (user.followed
                        ? <button
                            className="button button_place_users"
                            disabled={buttonDisabled.some(id => id === user.id)}
                            onClick={() => { unfollowThunk(user.id) }}
                        >Unfollow
                        </button>

                        : <button
                            className="button button_place_users"
                            disabled={buttonDisabled.some(id => id === user.id)}
                            onClick={() => { followThunk(user.id) }}
                        >Follow
                        </button>)
                }
            </div>
            <div className="users__info-container">
                <h2 className="users__name">{user.name}</h2>
                <p className="users__status">
                    {user.status != null ? user.status : 'There should be a status here'}
                </p>
                <p className="users__country">
                    {user.country ? user.country : 'There should be a country here'}
                </p>
            </div>
        </li>
    )
}

export default User;