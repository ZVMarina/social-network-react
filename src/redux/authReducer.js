const setUserDateActionType = 'set-user-date';

const initialState = {
    id: null,
    email: null,
    login: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUserDateActionType: {
            return {
                ...state,
                ...action.data
            };
        }
        default: return state;
    }
}

export const setUserDate = (userId, email, login) => (
    {
        type: setUserDateActionType, data: { userId, email, login }
    }
)

export default authReducer;