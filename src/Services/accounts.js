import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"
const api = axios.create({
    withCredentials: true
});

export function addNewUser(userInfo) {
    return axios.post(config.BACK_SERVER_PREFIX + "/user", userInfo, headerConfig)
}

export function logout() {
    return axios.post(config.BACK_SERVER_PREFIX + "/users/logout", {}, headerConfig)
}

export function login(userInfo) {
    return axios.post(config.BACK_SERVER_PREFIX + "/users/login", userInfo, headerConfig)
}

export function getUserLoginState() {
    return axios.get(config.BACK_SERVER_PREFIX + "/users/state", )
}