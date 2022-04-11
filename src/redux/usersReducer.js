const followActionType = 'follow';
const unFollowActionType = 'unfollow';
const setUsersActionType = 'set-users';

const initialState = {
    users: [
        { id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/97ed5c47c17b0f5b515f53c4036e590c.jpg', followed: true, name: "Geralt of Rivia", status: "I'm killing monsters", country: "Rivia" },
        { id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1811900/pub_5d937d6ae3062c00b016bbd5_5d94144598fe7900b14fc924/scale_1200', followed: true, name: "Cirilla", status: "I'm killing monsters with Geralt", country: "Cintra" },
        { id: 3, photoUrl: 'https://zikurat.media/wp-content/uploads/2020/05/Gd3OP1l3_o.jpg', followed: false, name: "Triss Merigold", status: "I want to be Geralt's woman", country: "Temeria" },
        { id: 4, photoUrl: 'https://sun1-14.userapi.com/s/v1/if1/4Q2tBt2Vs0D1iR2fdfYyNtK8Y5EKQSpe2FLD5IlPpuzZ9hv26bZRsBr5afcI_1c33OzNS1Yu.jpg?size=400x533&quality=96&crop=0,0,453,604&ava=1', followed: false, name: "Zoltan Chivay", status: "It's a dog's life Geralt, I'll tell you that much", country: "Mahakam" },
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