import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://79.143.31.216/',
    withCredentials: true,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})


export const authAPI = {

    login(login, password) {
        return instance.post(`login`, {login, password}).then(response => response.data)
    },

    register(login, password) {
        return instance.post(`register`, {login, password}).then(response => response.data)
    },
}