import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

import { APIReturnType } from '../type';

export const addNewPost: (notice: any) => APIReturnType = async (notice) => {
    try {
        return await axios.post(`${config.BACK_SERVER_PREFIX}/noteices`, notice, headerConfig);
    } catch (e) {
        console.log(e);
    }
}

export const getNotices: (offset: number, limit: number) => APIReturnType = async (offset, limit) => {
    try {
        return await axios.get(`${config.BACK_SERVER_PREFIX}/notices/${offset}/${limit}`, headerConfig);
    } catch (e) {
        console.log(e);
    }
};