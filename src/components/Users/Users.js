import React from 'react';
import Paginator from '../Paginator';
import User from './User';

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
                    <User
                        key={user.id}
                        user={user}
                        isAuth={props.isAuth}
                        followThunk={props.followThunk}
                        unfollowThunk={props.unfollowThunk}
                        buttonDisabled={props.buttonDisabled}
                    />

                )}
            </ul>
        </section>
    )
}

export default Users;