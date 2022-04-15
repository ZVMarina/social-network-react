const setAuthUserDataActionType = 'set-user-auth-data';

const initialState = {
    id: null,
    email: null,
    login: null,
    /* isFetching: false, */
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAuthUserDataActionType:
            return {
                ...state,
                ...action.data
            }

        default: return state;
    }
}

export const setAuthUserData = (id, email, login) => ({ type: setAuthUserDataActionType, data: {id, email, login} })

/* export const setIsFetchingActionCreator = (isFetching) => ({ type: setIsFetchingActionType, isFetching }) */

export default authReducer; 