import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"
const api = axios.create({
    withCredentials: true
});

export function addNewNotice(notice) {
    return axios.post(config.BACK_SERVER_PREFIX + "/notices", notice, headerConfig)
}

export function getNotices(offset, limit) {
    return axios.get(config.BACK_SERVER_PREFIX + "/notices/" + offset + "/" + limit, "", headerConfig)
}