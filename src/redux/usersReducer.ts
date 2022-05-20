import { PhotosType, UsersType } from './../types/types';
import { usersApi } from "../api/api";

const FOLLOW_ACTION_TYPE = 'users/follow';
const UNFOLLOW_ACTION_TYPE = 'users/unfollow';
const SET_USERS_ACTION_TYPE = 'users/set-users';
const SET_PAGE_ACTION_TYPE = 'users/set-page';
const SET_USERS_COUNT_ACTION_TYPE = 'users/set-total-users-count';
const SET_IS_FETCHING_ACTION_TYPE = 'users/set-is-fetching';
const TOGGLE_BUTTON_DISABLED_ACTION_TYPE = 'users/toggle-button-disabled';

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    buttonDisabled: [] as Array<number>, // array of users ids
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
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

type FollowActionType = {
    userId: number
    type: typeof FOLLOW_ACTION_TYPE
}
// userId, так как action.userId
export const followAC = (userId: number): FollowActionType => ({ type: FOLLOW_ACTION_TYPE, userId })

type UnFollowActionType = {
    userId: number
    type: typeof UNFOLLOW_ACTION_TYPE
}

export const unfollowAC = (userId: number): UnFollowActionType => ({ type: UNFOLLOW_ACTION_TYPE, userId })

type SetUsersActionType = {
    users: UsersType
    type: typeof SET_USERS_ACTION_TYPE
}

export const setUsersAC = (users: UsersType): SetUsersActionType => ({ type: SET_USERS_ACTION_TYPE, users })

type SetPageActionType = {
    currentPage: number
    type: typeof SET_PAGE_ACTION_TYPE
}

export const setPageAC = (currentPage: number): SetPageActionType => ({ type: SET_PAGE_ACTION_TYPE, currentPage })

type SetUsersCountActionType = {
    usersCount: number
    type: typeof SET_USERS_COUNT_ACTION_TYPE
}

export const setUsersCountAC = (usersCount: number): SetUsersCountActionType => ({ type: SET_USERS_COUNT_ACTION_TYPE, usersCount })

type SetIsFetchingActionType = {
    isFetching: boolean
    type: typeof SET_IS_FETCHING_ACTION_TYPE
}

export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingActionType => ({ type: SET_IS_FETCHING_ACTION_TYPE, isFetching })

type ToggleButtonDisabledActionType = {
    disabled: boolean
    userId: number
    type: typeof TOGGLE_BUTTON_DISABLED_ACTION_TYPE
}

export const toggleButtonDisabledAC = (disabled: boolean, userId: number): ToggleButtonDisabledActionType => ({ type: TOGGLE_BUTTON_DISABLED_ACTION_TYPE, disabled, userId })

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetchingAC(true));

    try {
        const data = await usersApi.getUsers(currentPage, pageSize)

        dispatch(setIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setUsersCountAC(data.totalCount));
    }
    catch (error) {
        console.log(error);
    }
}

export const followThunkCreator = (userId: number) => async (dispatch: any) => {
    dispatch(toggleButtonDisabledAC(true, userId));

    try {
        const data = await usersApi.postFollow(userId)

        if (data.resultCode === 0) {
            dispatch(followAC(userId));
        }

        dispatch(toggleButtonDisabledAC(false, userId));
    }
    catch (error) {
        console.log(error);
    }
}

export const unfollowThunkCreator = (userId: number) => async (dispatch: any) => {
    dispatch(toggleButtonDisabledAC(true, userId));

    try {
        const data = await usersApi.deleteFollow(userId)

        if (data.resultCode === 0) {
            dispatch(unfollowAC(userId));
        }

        dispatch(toggleButtonDisabledAC(false, userId));
    }
    catch (error) {
        console.log(error);
    }
}

export default usersReducer;