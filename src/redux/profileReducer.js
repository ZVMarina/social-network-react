import { profileApi } from "../api/api";

const addPostActionType = 'ADD-POST';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';
const setProfileInfoActionType = 'set-profile-info';

const initialState =
{
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ],
    postText: '',
    profile: null
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

export const getProfileInfoThunkCreator = (userId) => (dispatch) => {
    profileApi.getProfileInfo(userId)
        .then(data => dispatch(setProfileInfoAC(data)))
}

export default profileReducer;