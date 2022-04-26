import { authApi } from "../api/api";

const SET_AUTH_DATA_ACTION_TYPE = 'auth/set-user-auth-data';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA_ACTION_TYPE:
            return {
                ...state,
                ...action.data,
            }

        default: return state;
    }
}

export const setAuthUserDataAC = (id, email, login, isAuth) => ({ type: SET_AUTH_DATA_ACTION_TYPE, data: { id, email, login, isAuth } })

export const getAuthInfoThunkCreator = () => async (dispatch) => {
    const data = await authApi.getAuthInfo()

    if (data.resultCode === 0) {
        const authInfo = data.data
        dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login, true));
    }

}

export const loginThunkCreator = (email, password, rememberMe, setStatus) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthInfoThunkCreator());
    } else {
        setStatus(response.data.messages);
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    const response = await authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
}


export default authReducer; 