import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"
const api = axios.create({
    withCredentials: true
});

export function addNewPost(notice) {
    return axios.post(config.BACK_SERVER_PREFIX + "/board", notice, headerConfig)
}

export function getPosts(offset, limit) {
    return axios.get(config.BACK_SERVER_PREFIX + "/board/" + offset + "/" + limit, "", headerConfig)
}