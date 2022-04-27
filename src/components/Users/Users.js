import React from 'react';
import Paginator from './Paginator';
import User from './User';

const Users = ({ totalUsersCount, pageSize, currentPage, pageChangeHandler, users, isAuth, followThunk, unfollowThunk, buttonDisabled }) => {
    return (
        <section className="users">
            <h1 className="title users__title">Users</h1>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                pageChangeHandler={pageChangeHandler}
            />
            <ul className="users__list">
                {users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        isAuth={isAuth}
                        followThunk={followThunk}
                        unfollowThunk={unfollowThunk}
                        buttonDisabled={buttonDisabled}
                    />

                )}
            </ul>
        </section>
    )
}

export default Users;