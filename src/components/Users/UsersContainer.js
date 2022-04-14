import { connect } from 'react-redux';
import {
    followedActionCreator, setPageActionCreator,
    setUsersCountActionCreator, setUsersActionCreator, unfollowedActionCreator, setIsFetchingActionCreator
} from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import React from 'react';
import preloader from '../../images/users/preloader.svg'

class UsersContainer extends React.Component {
    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }

    pageChangeHandler = (page) => {
        this.props.setPage(page);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render = () => {
        return (
            <>
                {this.props.isFetching ? <img className='users__preloader' src={preloader} /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    pageChangeHandler={this.pageChangeHandler}
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
    }
}

const dispatchStateToProps = (dispatch) => {
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
}

export default connect(mapStateToProps,
    {
        follow: followedActionCreator,
        unFollow: unfollowedActionCreator,
        setUsers: setUsersActionCreator,
        setPage: setPageActionCreator,
        setTotalUsersCount: setUsersCountActionCreator,
        setIsFetching: setIsFetchingActionCreator,
    }
)(UsersContainer);