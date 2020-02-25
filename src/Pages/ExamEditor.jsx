import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/exam-editor.css'
import { Editor } from '@toast-ui/react-editor'
import * as ExamService from '../Services/exams'
import FileListTable from './Common/FileListTable'

class ExamEditor extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"exam"}/>
                <ExamEditorHeader/>
                <ExamEditorContents/>
                <Footer/>
            </div>
        )
    }
}

class ExamEditorHeader extends Component {
    render() {
        return (
            <div className={"fullWidth examHeaderDiv"}>
                <div className={"examTextDiv"}>
                    <div className={"examHeaderTitle robotoFont"}> Exam </div>
                    <div className={"examHeaderSubTitle notoSansFont"}> 기출문제 </div>
                </div>
            </div>
        )
    }
}

class ExamEditorContents extends Component {
    componentDidMount(): void {
        this.getSubjects(0);
    }

    getSubjects = (grade) => {
        ExamService.getSubjects(0)
            .then(response => {
                this.appendSubjects(response.data);
            })
            .catch(error => {
                console.log("과목을 가져오는데 실패했습니다.");
                // alert("과목을 가져오는데 실패했습니다.");
            })
    }

    appendSubjects = (subjects) => {
        const subjectSelector = document.getElementById('subjectSelector');
        for (let i=0; i<subjects.length; i++) {
            let option = document.createElement('option');
            option.value = subjects[i].id;
            option.innerText = subjects[i].subjectName;
            subjectSelector.appendChild(option);
        }
    }

    render() {
        return (
            <div className={"examEditorContentsDiv"}>
                <div className={"examMetaDataDiv"}>
                    <table className={"examMetaDataTable"}>
                        <tbody>
                        <tr className={"examMetaDataTr"}>
                            <td className={"labelTd"}>
                                <div className={"examMetaDataTag robotoFont"}>과목</div>
                            </td>
                            <td>
                                <select className={"selector"} id={"subjectSelector"}>
                                    <option className={"examOptions"} value={""}>과목을 선택하세요</option>
                                </select>
                            </td>
                            <td className={"labelTd"}>
                                <div className={"examMetaDataTag robotoFont"}> 교수 </div>
                            </td>
                            <td>
                                <select className={"selector"} id={"professorSelector"}>
                                    <option className={"examOptions"} value={""}>교수님을 선택하세요</option>
                                </select>
                            </td>
                        </tr>
                        <tr className={"examMetaDataTr"}>
                            <td className={"labelTd"}>
                                <div className={"examMetaDataTag robotoFont"}> 학년 </div>
                            </td>
                            <td colSpan={"3"}>
                                <div className={"gradeCheckboxDiv"}>
                                    <input type={"checkbox"} value={"1"} id={"1stGrade"}/><label className={"gradeLabel"} htmlFor={"1stGrade"}>1학년</label>
                                </div>
                                <div className={"gradeCheckboxDiv"}>
                                    <input type={"checkbox"} value={"2"} id={"2ndGrade"}/><label className={"gradeLabel"} htmlFor={"2ndGrade"}>2학년</label>
                                </div>
                                <div className={"gradeCheckboxDiv"}>
                                    <input type={"checkbox"} value={"3"} id={"3rdGrade"}/><label className={"gradeLabel"} htmlFor={"3rdGrade"}>3학년</label>
                                </div>
                                <div className={"gradeCheckboxDiv"}>
                                    <input type={"checkbox"} value={"4"} id={"4thGrade"}/><label className={"gradeLabel"} htmlFor={"4thGrade"}>4학년</label>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <FileListTable/>
                </div>
                <div className={"examEditor"}>
                    <Editor
                        language=""
                        previewStyle="vertical"
                        height="500px"
                        initialEditType="wysiwyg"
                        placeholder="text input..."
                        hideModeSwitch="true"
                        ref={this.editorRef}
                    />
                </div>
                <div>
                    <button className={"addPostButton"} onClick={ this.addNewPost }>등록</button>
                </div>
            </div>
        )
    }
}

export default ExamEditor;
