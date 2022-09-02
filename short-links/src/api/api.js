import * as axios from "axios";

let token = localStorage.getItem('token');
let offset = 0;
console.log(token)

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

export const mainAPI = {
    doShortLink(link) {
        return axios({
            method: 'post',
            url: `http://79.143.31.216/squeeze?link=${link}`,
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            }).then(response => response)
    },

    getLinks() {
        return axios({
            method: 'get',
            url: `http://79.143.31.216/statistics?order=asc_short&offset=${offset}&limit=5`,
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            }).then(response => response)
    },
}