import axios, { AxiosResponse } from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export const addNewUser: (userInfo: any) => Promise<AxiosResponse<any>> = (userInfo) => {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/join", userInfo, headerConfig);
};

export const logout: () => Promise<AxiosResponse<any>> = () => {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/logout", {}, headerConfig);
};

export const login: (userInfo: any) => Promise<AxiosResponse<any>> = (userInfo) => {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/login", userInfo, headerConfig);
};

export const getUserLoginState: () => Promise<AxiosResponse<any>> = () => {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/state", {}, headerConfig);
};