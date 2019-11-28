import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export function addNewRental(record) {
    return axios.post(config.BACK_SERVER_PREFIX + "/equipments", record, headerConfig)
}
