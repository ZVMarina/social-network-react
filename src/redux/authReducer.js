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

export const setAuthUserDataAC = (id, email, login, isAuth, captchaUrl) => (
    { type: SET_AUTH_DATA_ACTION_TYPE, data: { id, email, login, isAuth, captchaUrl } }
)

export const getCaptchaUrlAC = (captchaUrl) => (
    { type: GET_CAPTCHA_ACTION_TYPE, data: { captchaUrl } }
)

export const getAuthInfoThunkCreator = () => async (dispatch) => {
    try {
        const data = await authApi.getAuthInfo()

        if (data.resultCode === 0) {
            const authInfo = data.data
            dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login, true));
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const loginThunkCreator = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    try {
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
    catch (error) {
        console.log(error);
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    try {
        const response = await authApi.logout()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false, null));
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const getGaptchaThunkCreator = () => async (dispatch) => {
    try {
        const response = await securutyApi.getCaptchaUrl();
        const captchaUrl = response.data.url;

        dispatch(getCaptchaUrlAC(captchaUrl));
    }
    catch (error) {
        console.log(error);
    }
}



export default authReducer; 