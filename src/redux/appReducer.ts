import { Dispatch } from 'react';
// @ts-ignore
import { getAuthInfoThunkCreator } from './authReducer.ts'

const INITIALIZED_SUCCESS_ACTION_TYPE = 'app/initialized-success'

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

type ActionsTypes = InitializedSuccessActionType

type DispatchType = Dispatch<ActionsTypes>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType  => { // InitialStateType - тип, который возвращается
    switch (action.type) {
        case INITIALIZED_SUCCESS_ACTION_TYPE:
            return {
                ...state,
                initialized: true,
            }

        default: return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS_ACTION_TYPE
}

export const initializedSuccessAC = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS_ACTION_TYPE })

export const initializedAppTC = () => (dispatch: any) => {
    const promis = dispatch(getAuthInfoThunkCreator());

    promis
        .then(() => {
            dispatch(initializedSuccessAC())
        })
        .catch((error: any) => {
            console.log(error);
        })
}


export default appReducer; 