import { authApi, securutyApi } from "../api/api";

const SET_AUTH_DATA_ACTION_TYPE = 'auth/set-user-auth-data';
const GET_CAPTCHA_ACTION_TYPE = 'auth/set-user-auth-data';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // если null, значит каптча не обязательна
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA_ACTION_TYPE:
            return {
                ...state,
                ...action.data,
            }

        case GET_CAPTCHA_ACTION_TYPE:
            return {
                ...state,
                ...action.data,
            }

        default: return state;
    }
}

export const setAuthUserDataAC = (id, email, login, isAuth) => (
    { type: SET_AUTH_DATA_ACTION_TYPE, data: { id, email, login, isAuth } }
)

export const getCaptchaUrlAC = (captchaUrl) => (
    { type: GET_CAPTCHA_ACTION_TYPE, data: { captchaUrl } }
)

export const getAuthInfoThunkCreator = () => async (dispatch) => {
    const data = await authApi.getAuthInfo()

    if (data.resultCode === 0) {
        const authInfo = data.data
        dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login, true));
    }

}

export const loginThunkCreator = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getAuthInfoThunkCreator());
    }
    else {
        if (response.data.resultCode === 0) {
            dispatch(getGaptchaThunkCreator());
        }

        setStatus(response.data.messages);
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    const response = await authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
    }
}

export const getGaptchaThunkCreator = () => async (dispatch) => {
    const response = await securutyApi.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlAC(captchaUrl));
}



export default authReducer; 