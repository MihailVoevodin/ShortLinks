import { authAPI } from "../api/api";

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const IS_ALREADY_EXISTS = 'IS_ALREADY_EXISTS';
const IS_INCORRECT_LOGIN ='IS_INCORRECT_LOGIN';
const IS_REGISTER = 'IS_REGISTER';

let initialState = {
    login: null,
    isAuth: false,
    isRegister: false,
    isAlreadyExists: false,
    isIncorrectLogin: false,
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
        case IS_ALREADY_EXISTS: 
            return {
                ...state,
                isAlreadyExists: action.isAlreadyExists,
            }
        case IS_INCORRECT_LOGIN: 
            return {
                ...state,
                isIncorrectLogin: action.isIncorrectLogin,
            }
        case IS_REGISTER: 
            return {
                ...state,
                isRegister: action.isRegister,
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

export const isAuth = (isAuth) => {
    return {
        type: LOGIN,
        isAuth
    }
}

export const isRegister = (isRegister) => {
    return {
        type: IS_REGISTER,
        isRegister
    }
}
export const incorrectLogin = (isIncorrectLogin) => {
    return {
        type: IS_INCORRECT_LOGIN,
        isIncorrectLogin
    }
}

export const setIsAlreadyExists = (isAlreadyExists) => {
    return {
        type: IS_ALREADY_EXISTS,
        isAlreadyExists
    }
}

export const register = (login, password) => {
    return (dispatch) => {
        return authAPI.register(login, password).then(response => {
            dispatch(setUserName(response.data.username))
            dispatch(isRegister(true))
        })
        .catch (err => {
            dispatch(setIsAlreadyExists(true))
        })
    }
}

export const login = (login, password) => {
    return (dispatch) => {
        return authAPI.login(login, password).then(response => {
            localStorage.setItem('token', response.data.access_token)
            dispatch(isAuth(true))
            dispatch(incorrectLogin(false))
        })
        .catch(err => {
            dispatch(incorrectLogin(true))
        })
    }
}

export default authReducer;