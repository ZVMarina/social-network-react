import { connect } from 'react-redux';
import {
    followedAC, 
    setPageAC,
    setUsersCountAC, 
    setUsersAC, 
    unfollowedAC, 
    setIsFetchingAC,
    toggleButtonDisabledAC,
} from '../../redux/usersReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../Preloader';
import { usersApi } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true);

            usersApi.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })
        }
    }

    pageChangeHandler = (page) => {
        this.props.setPage(page);
        this.props.setIsFetching(true);
        usersApi.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    pageChangeHandler={this.pageChangeHandler}
                    toggleButtonDisabled={this.props.toggleButtonDisabled}
                    buttonDisabled={this.props.buttonDisabled}
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
    }
}

// connect автоматически создал колюбэк follow, в которой он вызывает followedAC, который в свою очередь возвращает action 
// и этот action диспатчится
export default connect(mapStateToProps,
    {
        follow: followedAC,
        unFollow: unfollowedAC,
        setUsers: setUsersAC,
        setPage: setPageAC,
        setTotalUsersCount: setUsersCountAC,
        setIsFetching: setIsFetchingAC,
        toggleButtonDisabled: toggleButtonDisabledAC
    }
)(UsersContainer);

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