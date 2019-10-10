import axios from 'axios';
import headerConfig from "./config"

// const server = "http://168.188.124.190:8000"
const server = "http://localhost:8000"

export function addNewUser(userInfo) {
    return axios.post(server + "/join", userInfo, headerConfig)
}