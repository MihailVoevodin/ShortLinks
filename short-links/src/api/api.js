import * as axios from "axios";

export const authAPI = {

    login(login, password) {

        return axios({
            method: 'post',
            url: 'http://79.143.31.216/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `username=${login}&password=${password}`

            }).then(response => response)
    },

    register(login, password) {
        return axios.post(`http://79.143.31.216/register?username=${login}&password=${password}`, { login, password })
            .then(response => response)
    },
}