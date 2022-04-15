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

export const setAuthUserData = (id, email, login) => ({ type: setAuthUserDataActionType, data: {id, email, login} })

export default authReducer; 