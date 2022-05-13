import { getAuthInfoThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS_ACTION_TYPE = 'app/initialized-success';

const initialState = {
    initialized: false // проиницилиазированно приложение или нет
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS_ACTION_TYPE:
            return {
                ...state,
                initialized: true,
            }

        default: return state;
    }
}

export const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS_ACTION_TYPE })

export const initializedAppTC = () => (dispatch) => {
    const promis = dispatch(getAuthInfoThunkCreator());

    promis
        .then(() => {
            dispatch(initializedSuccessAC())
        })
        .catch((error) => {
            console.log(error);
        })
}


export default appReducer; 