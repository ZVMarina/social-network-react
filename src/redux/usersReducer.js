const followActionType = 'follow';
const unFollowActionType = 'unfollow';
const setUsersActionType = 'set-users';

const initialState = {
    users: [
        /* { id: 1, followed: true, name: "Geralt of Rivia", status: "I'm killing monsters", from: "Rivia" },
        { id: 2, followed: true, name: "Cirilla", status: "I'm killing monsters with Geralt", from: "Cintra" },
        { id: 3, followed: false, name: "Triss Merigold", status: "I want to be Geralt's woman", from: "Temeria" },
        { id: 4, followed: false, name: "Keira Metz", status: "I'm Velen now", from: "Temeria" }, */
    ]
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
                users: [...state.users, ...action.users]
            }

        default: return state;
    }
}

export const followedActionCreator = (userId) => ({ type: followActionType, userId })

export const unfollowedActionCreator = (userId) => ({ type: unFollowActionType, userId })

export const setUsersActionCreator = (users) => ({ type: setUsersActionType, users })

export default usersReducer;