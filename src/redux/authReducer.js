import { authApi } from "../api/api";

const setAuthUserDataActionType = 'set-user-auth-data';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAuthUserDataActionType:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state;
    }
}

export const setAuthUserDataAC = (id, email, login, isAuth) => ({ type: setAuthUserDataActionType, data: { id, email, login, isAuth } })

export const getAuthInfoThunkCreator = () => (dispatch) => {
    authApi.getAuthInfo()
        .then(data => {
            if (data.resultCode === 0) {
                const authInfo = data.data
                dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login, true));
            }
        })
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthInfoThunkCreator());
            }
        })
}

export const logoutThunkCreator = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        })
}


export default authReducer; 