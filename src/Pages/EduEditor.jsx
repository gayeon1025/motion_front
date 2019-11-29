import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/edu-editor.css'
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'
import * as cookies from "./Common/Cookies";
import * as EduService from '../Services/educations';

class EducationEditor extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"edu"}/>
                <EduEditorHeader/>
                <EduEditorContents/>
                <Footer/>
            </div>
        )
    }
}

const EduEditorHeader = () => (
    <div className={"fullWidth eduEditorHeaderDiv"}>
        <div className={"eduTextDiv"}>
            <div className={"eduEditorHeaderTitle robotoFont"}> Education </div>
            <div className={"eduEditorHeaderSubTitle notoSansFont"}> 교육 </div>
        </div>
    </div>
)

class EduEditorContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRoll : null,
        }
    }

    render() {
        return (
            <div className={"contents eduEditorContentsDiv"}>
                <div className={"eduEditorContentTitle"}>교육</div>
                <div className={"newEduMetaDataDiv"}>
                    <table className={"eduDataTable"}>
                        <tbody>
                        <tr>
                            <td className={"eduLabel eduTitleTag robotoFont"}>
                                <div className={"labelDiv"}>교육명</div>
                            </td>
                            <td className={"eduTitleInputTd"}>
                                <input id={"eduTitleInput"} className={"eduEditorInput notoSansFont"} type={"text"} placeholder={"제목을 입력하세요"} autoFocus={true}/>
                            </td>
                            <td className={"eduLabel eduLeaderTag robotoFont"}>
                                <div className={"labelDiv"}>담당자(교육장)</div>
                            </td>
                            <td className={"eduLeaderInputTd"}>
                                <input id={"eduLeaderInput"} className={"eduEditorInput notoSansFont"} type={"text"} placeholder={"제목을 입력하세요"}/>
                            </td>
                        </tr>
                        <tr>
                            <td className={"eduLabel eduTitleTag robotoFont"}>
                                <div className={"labelDiv"}>시작일</div>
                            </td>
                            <td className={"eduTitleInputTd"}>
                                <input id={"eduTitleInput"} className={"eduEditorInput notoSansFont"} type={"date"}/>
                            </td>
                            <td className={"eduLabel eduLeaderTag robotoFont"}>
                                <div className={"labelDiv"}>종료</div>
                            </td>
                            <td className={"eduLeaderInputTd"}>
                                <input id={"eduLeaderInput"} className={"eduEditorInput notoSansFont"} type={"date"}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"boardEditor"}>
                    <Editor
                        language=""
                        previewStyle="vertical"
                        height="500px"
                        initialEditType="wysiwyg"
                        placeholder="장소, 일정 등을 입력해주세요!"
                        hideModeSwitch="true"
                        ref={this.editorRef}
                    />
                </div>
                <div className={"addEducationDiv"}>
                    <button className={"addEducationButton"} onClick={ this.addNewPost }>등록</button>
                </div>
            </div>
        )
    }
}

export default EducationEditor;
