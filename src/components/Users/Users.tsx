import React from 'react';
import { UsersType } from '../../types/types';
// @ts-ignore
import Paginator from '../Paginator.tsx';
import User from './User';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isAuth: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
    pageChangeHandler: (page: number) => void
    followThunk: () => void
    unfollowThunk: () => void
}

const Users: React.FC<PropsType> = (props) => {
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
                        followingInProgress={props.followingInProgress}
                    />

                )}
            </ul>
        </section>
    )
}

export default Users;