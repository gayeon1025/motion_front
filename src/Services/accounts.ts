import axios, { AxiosResponse } from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

import { APIReturnType } from '../type';

export const addNewUser: (userInfo: any) => APIReturnType = async (userInfo) => {
    try {
        return await axios.post(`${config.BACK_SERVER_PREFIX}/users`, userInfo, headerConfig);
    } catch (e) {
        console.log(e);
    }
};

export const logout: () => APIReturnType = async () => {
    try {
        return await axios.post(`${config.BACK_SERVER_PREFIX}/users/logout`, {}, headerConfig);
    } catch (e) {
        console.log(e);
    }
};

export const login: (userInfo: any) => APIReturnType = async (userInfo) => {
    try {
         return await axios.post(`${config.BACK_SERVER_PREFIX}/users/login`, userInfo, headerConfig);
    } catch (e) {
        console.log(e);
    }
};

export const getUserLoginState: () => APIReturnType = async () => {
    try {
        return await axios.get(`${config.BACK_SERVER_PREFIX}/users/state`);
    } catch (e) {
        console.log(e);
    }
};