import { connect } from "react-redux";
import { followedActionCreator, setUsersActionCreator, unfollowedActionCreator } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
     }
}

const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(Users);

export default UsersContainer;