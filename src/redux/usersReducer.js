const followActionType = 'follow';
const unFollowActionType = 'unfollow';
const setUsersActionType = 'set-users';
const setPageActionType = 'set-page';
const setTotalUsersCountActionType = 'set-total-users-count';

const initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case followActionType:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: true }
                    }

                    return users;
                })
            }

        case unFollowActionType:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: false }
                    }

                    return users;
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

        case setTotalUsersCountActionType:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }

        default: return state;
    }
}

export const followedActionCreator = (userId) => ({ type: followActionType, userId })

export const unfollowedActionCreator = (userId) => ({ type: unFollowActionType, userId })

export const setUsersActionCreator = (users) => ({ type: setUsersActionType, users })

export const setPageActionCreator = (currentPage) => ({ type: setPageActionType, currentPage })
// currentPage, так как action.currentPage

export const setTotalUsersCountActionCreator = (usersCount) => ({ type: setTotalUsersCountActionType, usersCount })

export default usersReducer; 