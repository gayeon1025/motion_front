import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export function addNewUser(userInfo) {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/join", userInfo, headerConfig)
}

export function logout() {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/logout", {}, headerConfig)
}

export function login(userInfo) {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/login", userInfo, headerConfig)
}

export function getUserLoginState() {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/state", {}, headerConfig)
}