import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/exam-editor.css'
import { Editor } from '@toast-ui/react-editor'
import * as cookies from "./Common/Cookies"
import * as ExamService from '../Services/exams'

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

    appendAttachments = () => {
        const fileInput = document.getElementById("file");
        let fileList = fileInput.files;

        const fileListBody = document.getElementById("fileBody");
        for (let i=0; i<fileList.length; i++) {
            let fileNameTd = document.createElement("td");
            fileNameTd.setAttribute('class', 'fileName');
            fileNameTd.innerHTML = fileList[i].name;

            let fileSizeTd = document.createElement("td");
            fileSizeTd.setAttribute('class', 'fileSize');
            fileSizeTd.innerHTML = this.formatBytes(fileList[i].size);

            let fileListTr = document.createElement("tr");
            fileListTr.appendChild(fileNameTd);
            fileListTr.appendChild(fileSizeTd)

            fileListBody.appendChild(fileListTr);
        }

        // Change display attribute from 'none' to 'block'
        const fileListTable = document.getElementsByClassName("fileList")[0];
        fileListTable.style.display = 'block';
    }

    formatBytes = (bytes) => {
        let marker = 1024; // Change to 1000 if required
        let decimal = 3; // Change as required
        let kiloBytes = marker; // One Kilobyte is 1024 bytes
        let megaBytes = marker * marker; // One MB is 1024 KB
        let gigaBytes = marker * marker * marker; // One GB is 1024 MB
        let teraBytes = marker * marker * marker * marker; // One TB is 1024 GB

        // return bytes if less than a KB
        if(bytes < kiloBytes) return bytes + " Bytes";
        // return KB if less than a MB
        else if(bytes < megaBytes) return(bytes / kiloBytes).toFixed(decimal) + " KB";
        // return MB if less than a GB
        else if(bytes < gigaBytes) return(bytes / megaBytes).toFixed(decimal) + " MB";
        // return GB if less than a TB
        else return(bytes / gigaBytes).toFixed(decimal) + " GB";
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
                    <div className={"fileBox"}>
                        <div className={"fileLabel robotoFont"}> 파일첨부 </div>
                        <div className={"fileInput"}>
                            <label htmlFor="file">내 PC</label>
                            <input type="file" id="file" name="file" multiple onChange={() => {this.appendAttachments()}}/>
                        </div>
                        <table className={"fileList"}>
                            <thead>
                                <tr>
                                    <td className={"fileName"}>파일명</td>
                                    <td className={"fileSize"}>파일크기</td>
                                </tr>
                            </thead>
                            <tbody id={"fileBody"}>
                            </tbody>
                        </table>
                    </div>
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
