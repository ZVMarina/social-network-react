import { AppStateType } from './reduxStore';
import { ThunkAction } from 'redux-thunk';
import { authApi, securutyApi } from "../api/api"

const SET_AUTH_DATA_ACTION_TYPE = 'auth/set-user-auth-data'
const GET_CAPTCHA_ACTION_TYPE = 'auth/set-user-auth-data'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false ,
    captchaUrl: null as string | null, // если null, значит каптча не обязательна
}

export type InitialStateType = typeof initialState // создать тип динамически

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrActionType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA_ACTION_TYPE:
            return {
                ...state,
                ...action.payload,
            }

        case GET_CAPTCHA_ACTION_TYPE:
            return {
                ...state,
                ...action.payload,
            }

        default: return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    id: number
    email: string
    login: string
    isAuth: boolean
    captchaUrl: string
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_DATA_ACTION_TYPE
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserDataAC =
    (id: number, email: string, login: string, isAuth: boolean, captchaUrl: string): SetAuthUserDataActionType => (
        { type: SET_AUTH_DATA_ACTION_TYPE, payload: { id, email, login, isAuth, captchaUrl } }
    )

type GetCaptchaUrActionType = {
    type: typeof GET_CAPTCHA_ACTION_TYPE
    payload: { captchaUrl: string }
}

export const getCaptchaUrlAC = (captchaUrl: string): GetCaptchaUrActionType => (
    { type: GET_CAPTCHA_ACTION_TYPE, payload: { captchaUrl } }
)

export const getAuthInfoThunkCreator = (): ThunkType => async (dispatch: any) => {
    try {
        const data = await authApi.getAuthInfo()

        if (data.resultCode === 0) {
            const authInfo = data.data
            dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login, true, null));
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const loginThunkCreator =
    (email: string, password: number, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
        try {
            const response = await authApi.login(email, password, rememberMe, captcha)

            if (response.data.resultCode === 0) {
                dispatch(getAuthInfoThunkCreator());
            }
            else {
                if (response.data.resultCode === 0) {
                    dispatch(getGaptchaThunkCreator());
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

export const logoutThunkCreator = (): ThunkType => async (dispatch: any) => {
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

export const getGaptchaThunkCreator = (): ThunkType => async (dispatch: any) => {
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