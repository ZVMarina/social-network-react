import { profileApi } from "../api/api";

const addPostActionType = 'ADD-POST';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';
const setProfileInfoActionType = 'set-profile-info';
const setStatusActionType = 'set-status';

const initialState =
{
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ],
    postText: '',
    profile: null,
    status: '',
}

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostActionType:
            const post = {
                id: 3,
                post: state.postText
            }

            return {
                ...state,
                postsData: [...state.postsData, post],
                postText: ''
            };

        case updatePostBodyActionType: {
            return {
                ...state,
                postText: action.newPostText
            };
        }

        case setProfileInfoActionType: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case setStatusActionType: {
            return {
                ...state,
                status: action.status
            };
        }

        default: return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: addPostActionType,
    }
}

export const updatePostBodyActionCreator = (newPostText) => {
    return {
        type: updatePostBodyActionType, newPostText: newPostText
    }
}

export const setProfileInfoAC = (profile) => {
    return {
        type: setProfileInfoActionType, profile
    }
}

export const setStatusAC = (status) => {
    return {
        type: setStatusActionType, status
    }
}

export const getProfileInfoThunkCreator = (userId) => (dispatch) => {
    profileApi.getProfileInfo(userId)
        .then(data => dispatch(setProfileInfoAC(data)))
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => dispatch(setStatusAC(response.data)))
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}

export default profileReducer;