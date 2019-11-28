import axios from 'axios';
import * as config from "../Config/config"
import headerConfig from "./config"

export function getSubjects(grade) {
    return axios.get(config.BACK_SERVER_PREFIX + "/subjects/" + grade)
}

export function getExams(grade, subject, professor, midOrFinal, offset, limit) {
    return axios.get(config.BACK_SERVER_PREFIX + "/exams/" + grade + "/" + subject + "/" + professor + "/" + midOrFinal + "/" + offset + "/" + limit, headerConfig)
}

export function getProfessor(grade, subject) {
    return axios.get(config.BACK_SERVER_PREFIX + "/exams/professor/" + grade + "/" + subject)
}
