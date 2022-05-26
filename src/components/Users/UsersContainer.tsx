import { connect } from 'react-redux';
import {
    followAC,
    setPageAC,
    unfollowAC,
    toggleFollowingInProgressAC,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
}
    // @ts-ignore
    from '../../redux/usersReducer.ts';
// @ts-ignore
import Users from './Users.tsx';
import React, { useEffect } from 'react';
import Preloader from '../Preloader';
import { compose } from 'redux';
import { UsersType } from '../../utils/types/types';
// @ts-ignore
import { AppStateType } from '../../redux/reduxStore.ts';

type MapStatePropsType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    isAuth: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number) => void
    setPage: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInProgress: () => void
    followThunk: () => void
    unfollowThunk: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: React.FC<PropsType> = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize);
    }, [])

    const pageChangeHandler = (page: number) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
    // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps,
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