import { profileApi } from "../api/api";

const ADD_POST_ACTION_TYPE = 'profile/add-post';
const DELETE_POST_ACTION_TYPE = 'profile/delete-post';
const SET_PROFILE_INFO_ACTION_TYPE = 'profile/set-profile-info';
const SET_STATUS_ACTION_TYPE = 'profile/set-status';
const SET_AVATAR_ACTION_TYPE = 'profile/set-avatar';
const SET_PROFILE_ACTION_TYPE = ' profile/set-profile';

type PostsType = {
    id: number
    post: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
} 

type PhotosType = {
    small: string | null
    large: string | null
} 

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fuulName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState =
{
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
}

export type initialStateType = typeof initialState

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state = initialState, action: any): initialStateType => {
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
            return {...state, profile: action.profile};
        }

        default: return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST_ACTION_TYPE
    postText: string
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST_ACTION_TYPE, postText: newPostText
    }
}

type DeleteostActionType = {
    type: typeof DELETE_POST_ACTION_TYPE
    postId: number
}

export const deletePostActionCreator = (postId: number): DeleteostActionType => {
    return {
        type: DELETE_POST_ACTION_TYPE, postId: postId
    }
}

type SetProfileInfoActionType = {
    type: typeof SET_PROFILE_INFO_ACTION_TYPE
    profile: ProfileType
}

export const setProfileInfoAC = (profile: ProfileType): SetProfileInfoActionType => {
    return {
        type: SET_PROFILE_INFO_ACTION_TYPE, profile
    }
}

type SetStatusActionType = {
    type: typeof SET_STATUS_ACTION_TYPE
    status: string
}

export const setStatusAC = (status: string): SetStatusActionType => {
    return {
        type: SET_STATUS_ACTION_TYPE, status
    }
}

type SetAvatarActionType = {
    type: typeof SET_AVATAR_ACTION_TYPE
    photos: PhotosType
}

export const setAvatarAC = (photos: PhotosType): SetAvatarActionType => {
    return {
        type: SET_AVATAR_ACTION_TYPE, photos
    }
}

type SetProfileActionType = {
    type: typeof SET_PROFILE_ACTION_TYPE
    profile: ProfileType
}

export const setProfileAC = (profile: ProfileType): SetProfileActionType => {
    return {
        type: SET_PROFILE_ACTION_TYPE, profile
    }
}

export const getProfileInfoThunkCreator = (userId: number) => async (dispatch: any) => {
    try {
        const data = await profileApi.getProfileInfo(userId);
        dispatch(setProfileInfoAC(data));
    }
    catch (error) {
        console.log(error);
    }
}

export const getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    try {
        const response = await profileApi.getStatus(userId);
        dispatch(setStatusAC(response.data));
    }
    catch (error) {
        console.log(error);
    }
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileApi.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const saveAvatarThunkCreator = (avatarFile: any) => async (dispatch: any) => {
    try {
        const response = await profileApi.saveAvatar(avatarFile);

        if (response.data.resultCode === 0) {
            dispatch(setAvatarAC(response.data.data.photos))
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const saveProfileThunkCreator = (profile: ProfileType, userId: number) =>
    async (dispatch: any) => {
        try {
            const response = await profileApi.saveProfile(profile);

            if (response.data.resultCode === 0) {
                const data = await profileApi.getProfileInfo(userId);

                delete data[userId];

                dispatch(setProfileInfoAC(data));
            }
        }
        catch (error) {
            console.log(error);
        }
    }

export default profileReducer;