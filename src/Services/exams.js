import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export function getSubjects() {
    return axios.get(config.BACK_SERVER_PREFIX + "/exams/subjects")
}
