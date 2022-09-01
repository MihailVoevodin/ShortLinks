import { authAPI } from "../api/api";

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';

let initialState = {
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: 
            return {
                ...state,
                isAuth: action.isAuth,
            }
        case REGISTER: 
            return {
                ...state,
                login: action.userName,
            }
        default:
            return state;
    }
}

export const setUserName = (userName) => {
    return {
        type: REGISTER,
        userName
    }
}

export const setLogin = (isAuth) => {
    return {
        type: LOGIN,
        isAuth
    }
}

export const register = (login, password) => {
    return (dispatch) => {
        return authAPI.register(login, password).then(response => {
            console.log(response);
            // dispatch(setUserName(response))
        })
    }
}

export const login = (login, password) => {
    return (dispatch) => {
        return authAPI.login(login, password).then(response => {
            console.log(response);
            // dispatch(setLogin(response))
        })
    }
}

export default authReducer;