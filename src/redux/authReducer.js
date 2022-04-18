import { headerApi } from "../api/api";

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

export const setAuthUserDataAC = (id, email, login) => ({ type: setAuthUserDataActionType, data: {id, email, login} })

export const getAuthInfoThunkCreator = () => (dispatch) => {
    headerApi.getAuthInfo()
        .then(data => {
            if (data.resultCode === 0) {
                const authInfo = data.data
                dispatch(setAuthUserDataAC(authInfo.id, authInfo.email, authInfo.login));
            }
        })
}

export default authReducer; 