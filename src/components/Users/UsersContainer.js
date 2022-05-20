import { connect } from 'react-redux';
import {
    followAC,
    setPageAC,
    unfollowAC,
    toggleFollowingInProgressAC,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/usersReducer.ts';
import Users from './Users.tsx';
import React, { useEffect } from 'react';
import Preloader from '../Preloader';
import { compose } from 'redux';

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize);
    }, [])

    const pageChangeHandler = (page) => {
        props.getUsersThunk(page, props.pageSize);

        props.setPage(page);
    }

    return (
        <>
            {props.isFetching ? <Preloader className={'preloader_place_users'} /> : null}
            <Users
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                pageChangeHandler={pageChangeHandler}
                toggleFollowingInProgress={props.toggleFollowingInProgress}
                followingInProgress={props.followingInProgress}
                followThunk={props.followThunk}
                unfollowThunk={props.unfollowThunk}
                isAuth={props.isAuth}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow: followAC,
            unfollow: unfollowAC,
            setPage: setPageAC,
            toggleFollowingInProgress: toggleFollowingInProgressAC,
            getUsersThunk: getUsersThunkCreator,
            followThunk: followThunkCreator,
            unfollowThunk: unfollowThunkCreator,
        }
    )
)(UsersContainer)