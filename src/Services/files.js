import axios from 'axios';
import * as config from "../Config/config"

export function uploadFiles(files) {
    return axios.post(config.BACK_SERVER_PREFIX + "/files",
        files,
        {
            enctype: 'multipart/form-data',
            withCredentials: false
        })
}