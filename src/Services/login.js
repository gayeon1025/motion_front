import axios from 'axios';

// const server = "http://168.188.124.190:8000"
const server = "http://localhost:8000"

export function login(id, pwd) {
    return axios.post(server + "/login", {
        userId  : id,
        userPwd : pwd
    })
}

export function getUserLoginState() {
    return axios.get(server + "/login/state")
}