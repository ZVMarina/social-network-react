import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../images/users/no-photo.png';
import Paginator from './Paginator';

const Users = (props) => {
    return (
        <section className="users">
            <h1 className="title users__title">Users</h1>
            <Paginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                pageChangeHandler={props.pageChangeHandler}
            />
            <ul className="users__list">
                {props.users.map(user =>
                    <li className="users__item" key={user.id}>
                        <div className="users__follow-container">
                            <div className="users__avatar-container">
                                <NavLink className="navigation__link" to={'/profile/' + user.id}>
                                    <img className="users__avatar" src={user.photos.small != null ? user.photos.small : photo}></img>
                                </NavLink>
                            </div>
                            {
                                props.isAuth && (user.followed
                                    ? <button className="button users__button"
                                        disabled={props.buttonDisabled.some(id => id === user.id)}
                                        onClick={() => { props.unfollowThunk(user.id) }}>Unfollow</button>
                                    : <button className="button users__button"
                                        disabled={props.buttonDisabled.some(id => id === user.id)}
                                        onClick={() => { props.followThunk(user.id) }}>Follow</button>)
                            }
                        </div>
                        <div className="users__info-container">
                            <h2 className="users__name">{user.name}</h2>
                            <p className="users__status">{user.status != null ? user.status : 'There should be a status here'}</p>
                            <p className="users__country">{user.country ? user.country : 'There should be a country here'}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Users;