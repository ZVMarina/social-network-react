import { getAuthInfoThunkCreator } from "./authReducer";

const initializedSuccessActionType = 'initialized-success';

const initialState = {
    initialized: false // проиницилиазированно приложение или нет
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case initializedSuccessActionType:
            return {
                ...state,
                initialized: true,
            }

        default: return state;
    }
}

export const initializedSuccessAC = () => ({ type: initializedSuccessActionType })

export const initializedAppTC = () => (dispatch) => {
   const promis = dispatch(getAuthInfoThunkCreator());

   promis.then(() => {
       dispatch(initializedSuccessAC())
   })
}


export default appReducer; 