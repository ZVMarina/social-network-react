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
    buttonDisabled: false,
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
            }

        default: return state;
    }
}

export const followedAC = (userId) => ({ type: followActionType, userId })

export const unfollowedAC = (userId) => ({ type: unFollowActionType, userId })

export const setUsersAC = (users) => ({ type: setUsersActionType, users })

export const setPageAC = (currentPage) => ({ type: setPageActionType, currentPage })
// currentPage, так как action.currentPage

export const setUsersCountAC = (usersCount) => ({ type: setUsersCountActionType, usersCount })

export const setIsFetchingAC = (isFetching) => ({ type: setIsFetchingActionType, isFetching })

export const toggleButtonDisabledAC = (disabled) => ({ type: toggleButtonDisabledActionType, disabled })

export default usersReducer; 