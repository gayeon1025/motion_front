import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export function getEducations(offset, limit) {
    return axios.get(config.BACK_SERVER_PREFIX + "/edu/" + offset + "/" + limit, "", headerConfig)
}
