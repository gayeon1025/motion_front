import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"
const api = axios.create({
    withCredentials: true
});

export function addNewPost(notice) {
    return axios.post("/board", notice, headerConfig)
}

export function getPosts(offset, limit) {
    return axios.get("/board/" + offset + "/" + limit, "", headerConfig)
}