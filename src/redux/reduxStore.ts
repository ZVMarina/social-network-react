import { applyMiddleware, combineReducers, createStore, compose} from 'redux';
// @ts-ignore
import authReducer from './authReducer.ts';
// @ts-ignore
import dialogsReducer from './dialogsReducer.ts';
// @ts-ignore
import profileReducer from './profileReducer.ts';
// @ts-ignore
import usersReducer from './usersReducer.ts';
import thunkMiddleware from 'redux-thunk'
// @ts-ignore
import appReducer from './appReducer.ts';



const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

type RootRedicerType = typeof rootReducers
export type AppStateType = ReturnType<RootRedicerType> // ReturnType определит то, что возвращается и зафиксирует под именем AppStateType

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;