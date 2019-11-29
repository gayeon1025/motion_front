import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/notice-editor.css'
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'

class NoticeEditor extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"notice"}/>
                <NoticeEditorHeader/>
                {/*<NoticeContents userRoll={this.state.loggedInUser.userRoll}/>*/}
                <EditorContents/>
                <Footer/>
            </div>
        )
    }
}

const NoticeEditorHeader = () => (
    <div className={"fullWidth noticeEditorHeaderDiv"}>
        <div className={"noticeTextDiv"}>
            <div className={"noticeEditorHeaderTitle robotoFont"}> Notice </div>
            <div className={"noticeEditorHeaderSubTitle notoSansFont"}> 공지사항 </div>
        </div>
    </div>
)

class EditorContents extends Component {
    editorRef = React.createRef();

    addNewNotice = () => {
        if (!this.titleIsExist()) {
            alert("제목을 입력해주세요")
            return
        }
        let addNewNotice = window.confirm("새 공지사항을 등록하시겠습니까?")
        if (addNewNotice) {
            let contents = this.editorRef.current.getInstance().getValue();
            let notice = {
                noticeTitle : document.getElementById("noticeTitleInput").value,
                noticeContent : contents
            }
            // noticeService.addNewNotice(notice)
            //     .then(response => {
            //         if (response.data == true) {
            //             window.location.href = "/notice"
            //         }
            //         if (response.data == false) {
            //             alert("오류로 저장에 실패하였습니다. 잠시 후 다시 시도해 주시기 바랍니다.")
            //         }
            //     })
            //     .catch(error => {
            //         alert("네트워크 오류로 공지 등록에 실패하였습니다.")
            //     })
        }
    }

    titleIsExist = () => {
        let titleInput = document.getElementById("noticeTitleInput");
        if (titleInput.value == "") {
            return false
        }
        return true
    }

    render() {
        return (
            <div className={"noticeEditorContentsDiv"}>
                <div className={"newNoticeTitleDiv"}>
                    <table className={"noticeTitleTable"}>
                        <tbody>
                            <tr>
                                <td className={"noticeTitleTag robotoFont"}> 제목 </td>
                                <td>
                                    <input id={"noticeTitleInput"} className={"notoSansFont"} type={"text"} placeholder={"제목을 입력하세요"} autoFocus={true}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"noticeEditor"}>
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
                    <button className={"addNoticeButton"} onClick={ this.addNewNotice }>등록</button>
                </div>
            </div>
        )
    }
}

export default NoticeEditor
