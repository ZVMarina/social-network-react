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
import React from 'react';
import Preloader from '../Preloader';
import { compose } from 'redux';

class UsersContainerClass extends React.Component {
    componentDidMount = () => {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);

    }

    pageChangeHandler = (page) => {
        this.props.getUsersThunk(page, this.props.pageSize);

        this.props.setPage(page);
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader className="users__preloader" /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageChangeHandler={this.pageChangeHandler}
                    toggleButtonDisabled={this.props.toggleButtonDisabled}
                    buttonDisabled={this.props.buttonDisabled}
                    followThunk={this.props.followThunk}
                    unfollowThunk={this.props.unfollowThunk}
                    isAuth={this.props.isAuth}
                />
            </>
        )
    }
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

// connect автоматически создал колюбэк follow, в которой он вызывает followedAC, который в свою очередь возвращает action 
// и этот action диспатчится

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
)(UsersContainerClass)

// follow - колбэк, который внутри себя вызовет followedActionCreator и задеспатчит результат этого вызова
/* const dispatchStateToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followedActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowedActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setPage: (currentPage) => {
            dispatch(setPageActionCreator(currentPage))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setUsersCountActionCreator(usersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
} */