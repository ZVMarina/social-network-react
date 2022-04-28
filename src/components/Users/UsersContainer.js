import { connect } from 'react-redux';
import {
    followAC,
    setPageAC,
    unfollowAC,
    toggleButtonDisabledAC,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../redux/usersReducer';
import Users from './Users';
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
                toggleButtonDisabled={props.toggleButtonDisabled}
                buttonDisabled={props.buttonDisabled}
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
        buttonDisabled: state.usersPage.buttonDisabled,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow: followAC,
            unfollow: unfollowAC,
            setPage: setPageAC,
            toggleButtonDisabled: toggleButtonDisabledAC,
            getUsersThunk: getUsersThunkCreator,
            followThunk: followThunkCreator,
            unfollowThunk: unfollowThunkCreator,
        }
    )
)(UsersContainer)