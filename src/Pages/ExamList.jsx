import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/exam.css'
import Pagination from "./Common/Pagination";
import * as examService from '../Services/exams';
import li from "eslint-plugin-jsx-a11y/src/util/implicitRoles/li";

class ExamList extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"exam"}/>
                <ExamListHeader/>
                <ExamListContents
                    grade={this.props.match.params.grade}
                    offset={this.props.match.params.offset}
                    limit={this.props.match.params.limit}
                />
                <Footer/>
            </div>
        )
    }
}

class ExamListHeader extends Component {
    render() {
        return (
            <div className={"fullWidth examHeaderDiv"}>
                <div className={"examTextDiv"}>
                    <div className={"examHeaderTitle robotoFont"}> Exam </div>
                    <div className={"examHeaderSubTitle notoSansFont"}>기출문제 </div>
                </div>
            </div>
        );
    }
}

class ExamListContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset : this.props.offset,
            limit  : this.props.limit,
            subject : "null",
            professor : "null",
            midOrFinal : 0,
        }
    }

    componentDidMount(): void {
        console.log("componentDidMount!");
        this.getSubjects();
        this.getExams(this.props.grade, "null", "null", 0, this.state.offset, this.state.limit); // empty subject and professor means getting whole subjects.
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        this.getExams(this.props.grade, this.state.subject, this.state.professor, this.state.midOrFinal, this.state.offset, this.state.limit);
        return true;
    }

    getExams = (grade, subject, professor, midOrFinal, offset, limit) => {
        examService.getExams(grade, subject, professor, midOrFinal, offset,limit)
            .then(response => {
                const exams = response.data;
                if (exams == null) {
                    this.printNoExam();
                    return;
                }
                this.printExams(exams);
            })
            .catch(error => {
                // Todo : Below is temporary.
                // If you get error, you have to confirm error to user. (console.log)
                this.printNoExam();
            })
    }

    printExams = (exams) => {
        const examTableBody = document.getElementById("examTableBody");
        examTableBody.innerHTML = '';
        let examIndex = (this.state.offset - 1) * this.state.limit + 1;
        for (let i=0; i<exams.length; i++) {
            let numberTd = document.createElement('td');
            numberTd.setAttribute('class', 'examNo');
            numberTd.innerText = examIndex++;

            let subjectTd = document.createElement('td');
            subjectTd.setAttribute('class', 'subject');
            subjectTd.innerText = exams[i].name;
            // subjectTd.onclick(this.showExamDetail(exams[i].id));

            let professorTd = document.createElement('td');
            professorTd.setAttribute('class', 'professor');
            professorTd.innerText = exams[i].professor;

            let midOrFinalTd = document.createElement('td');
            midOrFinalTd.setAttribute('class', 'midOrFinal');
            if (exams[i].midOrFinal == 1) {
                midOrFinalTd.innerText = "중간";
            }
            else {
                midOrFinalTd.innerText = "기말";
            }

            let examRegisterDateTd = document.createElement('td');
            examRegisterDateTd.setAttribute('class', 'examRegisterDate');
            examRegisterDateTd.innerText = exams[i].registerDate;

            let tr = document.createElement('tr');
            tr.appendChild(numberTd);
            tr.appendChild(subjectTd);
            tr.appendChild(professorTd);
            tr.appendChild(midOrFinalTd);
            tr.appendChild(examRegisterDateTd);

            examTableBody.appendChild(tr);
        }
    }

    printNoExam = () => {
        document.getElementById('examTableBody').innerHTML = '<tr> <td colspan=\'5\'>등록된 기출문제가 없습니다</td> </tr>';
    }

    getSubjects = () => {
        examService.getSubjects()
            .then(response => {
                if (response.data != null) {
                    this.appendSubjects(response.data);
                }
            })
            .catch(error => {
                console.log("Fail to get subjects : " + error);
            })
    }

    appendSubjects = (subjects) => {
        const subjectSelector = document.getElementById("subjectSelector");
        for (let i=0; i<subjects.length; i++) {
            let option = document.createElement('option');
            option.setAttribute('class','subjectOption');
            option.value = subjects[i].id;

            subjectSelector.appendChild(option);
        }
    }

    selectSubject = () => {
        const subjectSelect = document.getElementById("subjectSelector");
        const selectedSubject = subjectSelect.options[subjectSelect.selectedIndex].value;
        this.setState({subject : selectedSubject}, () => {this.getProfessor(this.props.grade, selectedSubject);});
    }

    getProfessor = (subject) => {
        examService.getProfessor(this.props.grade, subject)
            .then(response => {
                if (response.data != null) {
                    this.appendProfessors(response.data);
                }
            })
            .catch(error => {
                console.log("Fail to get professor : " + error);
            })

    }

    appendProfessors = (professor) => {
        const professorSelector = document.getElementById("professorSelector");
        for (let i=0; i<professor.length; i++) {
            let option = document.createElement('option');
            option.setAttribute('class','professorOption');
            option.value = professor[i].professor;

            professorSelector.appendChild(option);
        }
    }

    selectProfessor = () => {
        const professorSelect = document.getElementById("professorSelector");
        const selectedProfessor = professorSelect.options[professorSelect.selectedIndex].value;
        this.setState({professor : selectedProfessor});
    }

    selectMidOrFinal = () => {
        const midOrFinalSelect = document.getElementById("midOfFinalSelector");
        const selectedMidOrFinal = midOrFinalSelect.options[midOrFinalSelect.selectedIndex].value;
        this.setState({midOrFinal : Number(selectedMidOrFinal)})
    }

    showExamDetail = (examId) => {
        window.location.href = "/exam/detail/" + examId;
    }

    render() {
        return (
            <div className={"contents examContentsDiv"}>
                <div className={"examContentTitle"}>{this.props.grade}학년 기출문제</div>
                <div className={"listFilterBox"}>
                    <select className={"filterSelector"} id={"subjectSelector"} onChange={() => {this.selectSubject()}}>
                        <option className={"subjectOption"} value={""}>과목을 선택하세요</option>
                    </select>
                    <select className={"filterSelector"} id={"professorSelector"} onChange={() => {this.selectProfessor()}}>
                        <option className={"professorOption"} value={""}>교수님을 선택하세요</option>
                    </select>
                    <select className={"filterSelector"} id={"midOfFinalSelector"} onChange={() => {this.selectMidOrFinal()}}>
                        <option className={"midOfFinalOption"} value={""}>중간/기말을 선택하요</option>
                        {/*<option className={"midOfFinalOption"} value={"0"}>전체</option>*/}
                        <option className={"midOfFinalOption"} value={"1"}>중간</option>
                        <option className={"midOfFinalOption"} value={"2"}>기말</option>
                    </select>
                </div>
                <div className="examListTableDiv">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="examNo">번호</th>
                            <th className="subject">과목</th>
                            <th className="professor">교수</th>
                            <th className="midOrFinal">중간/기말</th>
                            <th className="examRegisterDate">등록일</th>
                        </tr>
                        </thead>
                        <tbody id="examTableBody">
                        <tr>
                            <th className="examNo">1</th>
                            <td className="subject" onClick={(event) => {this.showExamDetail(1)}}>데이터통신</td>
                            <td className="professor">김상하</td>
                            <td className="midOrFinal">중간</td>
                            <td className="examRegisterDate">2019.09.29</td>
                        </tr>
                        <tr>
                            <th className="examNo">2</th>
                            <td className="subject" onClick={(event) => {this.showExamDetail(event)}}>자료구조</td>
                            <td className="professor">박정희</td>
                            <td className="midOrFinal">기말</td>
                            <td className="examRegisterDate">2019.09.29</td>
                        </tr>
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        )
    }
}

export default ExamList
