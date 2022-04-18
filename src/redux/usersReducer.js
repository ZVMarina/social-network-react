import { usersApi } from "../api/api";

const followActionType = 'follow';
const unFollowActionType = 'unfollow';
const setUsersActionType = 'set-users';
const setPageActionType = 'set-page';
const setUsersCountActionType = 'set-total-users-count';
const setIsFetchingActionType = 'set-is-fetching';
const toggleButtonDisabledActionType = 'toggle-button-disabled';

const initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    buttonDisabled: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case followActionType:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }

                    return user;
                })
            }

        case unFollowActionType:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }

                    return user;
                })
            }

        case setUsersActionType:
            return {
                ...state,
                // сначала сделал копию юзеров, затем добавили туда пришедших юзеров
                users: [...action.users]
            }

        case setPageActionType:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case setUsersCountActionType:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }

        case setIsFetchingActionType:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case toggleButtonDisabledActionType:
            return {
                ...state,
                buttonDisabled: action.disabled
                    ? [...state.buttonDisabled, action.userId]
                    : state.buttonDisabled.filter(id => id !== action.userId)
            }

        default: return state;
    }
}

// userId, так как action.userId
export const followAC = (userId) => ({ type: followActionType, userId })

export const unfollowAC = (userId) => ({ type: unFollowActionType, userId })

export const setUsersAC = (users) => ({ type: setUsersActionType, users })

export const setPageAC = (currentPage) => ({ type: setPageActionType, currentPage })

export const setUsersCountAC = (usersCount) => ({ type: setUsersCountActionType, usersCount })

export const setIsFetchingAC = (isFetching) => ({ type: setIsFetchingActionType, isFetching })

export const toggleButtonDisabledAC = (disabled, userId) => ({ type: toggleButtonDisabledActionType, disabled, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetchingAC(true));

    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setUsersCountAC(data.totalCount));
        })

}

export const followThunkCreator = (userId) => (dispatch) => {
    usersApi.postFollow(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(userId));
            }

            dispatch(toggleButtonDisabledAC(false, userId));
        })

}

export const unfollowThunkCreator = (userId) => (dispatch) => {
    usersApi.deleteFollow(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowAC(userId));
            }

            dispatch(toggleButtonDisabledAC(false, userId));
        })

}

export default usersReducer; 