const followActionType = 'follow';
const unFollowActionType = 'unfollow';
const setUsersActionType = 'set-users';
const setPageActionType = 'set-page';
const setUsersCountActionType = 'set-total-users-count';
const setIsFetchingActionType = 'set-is-fetching';

const initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case followActionType:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        console.log(user);
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

        default: return state;
    }
}

export const followedActionCreator = (userId) => ({ type: followActionType, userId })

export const unfollowedActionCreator = (userId) => ({ type: unFollowActionType, userId })

export const setUsersActionCreator = (users) => ({ type: setUsersActionType, users })

export const setPageActionCreator = (currentPage) => ({ type: setPageActionType, currentPage })
// currentPage, так как action.currentPage

export const setUsersCountActionCreator = (usersCount) => ({ type: setUsersCountActionType, usersCount })

export const setIsFetchingActionCreator = (isFetching) => ({ type: setIsFetchingActionType, isFetching })

export default usersReducer; 