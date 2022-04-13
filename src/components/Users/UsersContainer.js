import { connect } from "react-redux";
import { followedActionCreator, setPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowedActionCreator } from "../../redux/usersReducer";
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
        },
        setPage: (currentPage) => {
            dispatch(setPageActionCreator(currentPage))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountActionCreator(usersCount))
        }
     }
}

const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(Users);

export default UsersContainer;