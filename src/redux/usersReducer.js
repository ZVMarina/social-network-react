import { usersApi } from "../api/api";

const FOLLOW_ACTION_TYPE = 'users/follow';
const UNFOLLOW_ACTION_TYPE = 'users/unfollow';
const SET_USERS_ACTION_TYPE = 'users/set-users';
const SET_PAGE_ACTION_TYPE = 'users/set-page';
const SET_USERS_COUNT_ACTION_TYPE = 'users/set-total-users-count';
const SET_IS_FETCHING_ACTION_TYPE = 'users/set-is-fetching';
const TOGGLE_BUTTON_DISABLED_ACTION_TYPE = 'users/toggle-button-disabled';

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
        case FOLLOW_ACTION_TYPE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }

                    return user;
                })
            }

        case UNFOLLOW_ACTION_TYPE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }

                    return user;
                })
            }

        case SET_USERS_ACTION_TYPE:
            return {
                ...state,
                // сначала сделал копию юзеров, затем добавили туда пришедших юзеров
                users: [...action.users]
            }

        case SET_PAGE_ACTION_TYPE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_COUNT_ACTION_TYPE:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }

        case SET_IS_FETCHING_ACTION_TYPE:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_BUTTON_DISABLED_ACTION_TYPE:
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
export const followAC = (userId) => ({ type: FOLLOW_ACTION_TYPE, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW_ACTION_TYPE, userId })

export const setUsersAC = (users) => ({ type: SET_USERS_ACTION_TYPE, users })

export const setPageAC = (currentPage) => ({ type: SET_PAGE_ACTION_TYPE, currentPage })

export const setUsersCountAC = (usersCount) => ({ type: SET_USERS_COUNT_ACTION_TYPE, usersCount })

export const setIsFetchingAC = (isFetching) => ({ type: SET_IS_FETCHING_ACTION_TYPE, isFetching })

export const toggleButtonDisabledAC = (disabled, userId) => ({ type: TOGGLE_BUTTON_DISABLED_ACTION_TYPE, disabled, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetchingAC(true));

    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setUsersCountAC(data.totalCount));
        })

}

export const followThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleButtonDisabledAC(true, userId));

    const data = await usersApi.postFollow(userId)

    if (data.resultCode === 0) {
        dispatch(followAC(userId));
    }

    dispatch(toggleButtonDisabledAC(false, userId));
}

export const unfollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleButtonDisabledAC(true, userId));

    const data = await usersApi.deleteFollow(userId)

    if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
    }

    dispatch(toggleButtonDisabledAC(false, userId));
}

export default usersReducer;