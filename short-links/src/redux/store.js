import { applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import mainReducer from "./mainReducer";

let reducers = combineReducers({
    auth: authReducer,
    main: mainReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;