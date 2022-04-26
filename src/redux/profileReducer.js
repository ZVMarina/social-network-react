import { profileApi } from "../api/api";

const addPostActionType = 'add-post';
const setProfileInfoActionType = 'set-profile-info';
const setStatusActionType = 'set-status';

const initialState =
{
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ],
    profile: null,
    status: '',
}

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostActionType:
            const post = {
                id: state.postsData.length + 1,
                post: action.postText,
            }

            return {
                ...state,
                postsData: [...state.postsData, post],
            };

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


export const addPostActionCreator = (newPostText) => {
    return {
        type: addPostActionType, postText: newPostText
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
    return profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}

export default profileReducer;