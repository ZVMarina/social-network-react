import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../images/users/no-photo2.png'

function Users(props) {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <section className="users">
            <ul className="users__pages">
                {pages.map(page => {
                    return <li className={props.currentPage === page ? 'users__page users__page_active' : 'users__page'}
                        onClick={() => { props.pageChangeHandler(page) }}
                    >{page}</li>
                })}
            </ul>
            <h1 className="users__title">Users</h1>
            <ul className="users__list">
                {props.users.map(user =>
                    <li className="users__item">
                        <div className="users__follow-container">
                            <div className="users__avatar-container">
                                <NavLink className="navigation__link" to={'/profile/' + user.id}>
                                    <img className="users__avatar" src={user.photos.small != null ? user.photos.small : photo}></img>
                                </NavLink>
                            </div>
                            {user.followed
                                ? <button className="button users__button"
                                    onClick={() => { props.unFollow(user.id) }}>Follow</button>
                                : <button className="button users__button"
                                    onClick={() => { props.follow(user.id) }}>Unfollow</button>}
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