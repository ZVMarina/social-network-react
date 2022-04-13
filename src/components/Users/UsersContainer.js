import { connect } from "react-redux";
import { followedActionCreator, setPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, unfollowedActionCreator } from "../../redux/usersReducer";
import UsersApiContainer from "./UsersApiContainer";


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

const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(UsersApiContainer);

export default UsersContainer;