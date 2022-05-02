import { profileApi } from "../api/api";

const ADD_POST_ACTION_TYPE = 'profile/add-post';
const DELETE_POST_ACTION_TYPE = 'profile/delete-post';
const SET_PROFILE_INFO_ACTION_TYPE = 'profile/set-profile-info';
const SET_STATUS_ACTION_TYPE = 'profile/set-status';
const SET_AVATAR_ACTION_TYPE = 'profile/set-avatar';
const SET_PROFILE_ACTION_TYPE = ' profile/set-profile';

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
        case ADD_POST_ACTION_TYPE:
            const post = {
                id: state.postsData.length + 1,
                post: action.postText,
            }

            return {
                ...state,
                postsData: [...state.postsData, post],
            };

        case DELETE_POST_ACTION_TYPE:
            return {
                ...state,
                postsData: state.postsData.filter(post => {
                    if (post.id !== action.postId) {
                        return post
                    }
                }),
            };

        case SET_PROFILE_INFO_ACTION_TYPE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS_ACTION_TYPE: {
            return {
                ...state,
                status: action.status
            };
        }

        case SET_AVATAR_ACTION_TYPE: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        }

        case SET_PROFILE_ACTION_TYPE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default: return state;
    }
}


export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST_ACTION_TYPE, postText: newPostText
    }
}

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST_ACTION_TYPE, postId: postId
    }
}

export const setProfileInfoAC = (profile) => {
    return {
        type: SET_PROFILE_INFO_ACTION_TYPE, profile
    }
}

export const setStatusAC = (status) => {
    return {
        type: SET_STATUS_ACTION_TYPE, status
    }
}

export const setAvatarAC = (photos) => {
    return {
        type: SET_AVATAR_ACTION_TYPE, photos
    }
}

export const setProfileAC = (profile) => {
    return {
        type: SET_PROFILE_ACTION_TYPE, profile
    }
}

export const getProfileInfoThunkCreator = (userId) => async (dispatch) => {
    const data = await profileApi.getProfileInfo(userId);
    dispatch(setProfileInfoAC(data));
    console.log(data);
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await profileApi.getStatus(userId);
    dispatch(setStatusAC(response.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileApi.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const saveAvatarThunkCreator = (avatarFile) => async (dispatch) => {
    const response = await profileApi.saveAvatar(avatarFile);

    if (response.data.resultCode === 0) {
        dispatch(setAvatarAC(response.data.data.photos))
    }
}

export const saveProfileThunkCreator = (profile) =>
    async (dispatch) => {
        const response = await profileApi.saveProfile(profile);

        if (response.data.resultCode === 0) {
            dispatch(setProfileAC(response.data.data))
        }

    }

export default profileReducer;