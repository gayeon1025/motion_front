import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/board-editor.css'
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'
import * as userValidation from './Common/UserValidation'
import * as boardService from "../Services/board";

class BoardEditor extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loggedInUser : userValidation.getUserLoginState(this)
        }
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                <BoardEditorHeader/>
                <BoardEditorContents/>
                <Footer/>
            </div>
        )
    }
}

const BoardEditorHeader = () => (
    <div className={"fullWidth boardEditorHeaderDiv"}>
        <div className={"boardTextDiv"}>
            <div className={"boardEditorHeaderTitle robotoFont"}> Board </div>
            <div className={"boardEditorHeaderSubTitle notoSansFont"}> 게시판 </div>
        </div>
    </div>
)

class BoardEditorContents extends Component {
    editorRef = React.createRef();

    addNewPost = () => {
        if (!this.titleIsExist()) {
            alert("제목을 입력해주세요")
            return
        }
        let addNewPost = window.confirm("새 게시글을 등록하시겠습니까?")
        if (addNewPost) {
            let contents = this.editorRef.current.getInstance().getValue();
            let post = {
                boardTitle : document.getElementById("boardTitleInput").value,
                boardContent : contents
            }
            boardService.addNewPost(post)
                .then(response => {
                    if (response.data == true) {
                        window.location.href = "/board"
                    }
                    if (response.data == false) {
                        alert("오류로 저장에 실패하였습니다. 잠시 후 다시 시도해 주시기 바랍니다.")
                    }
                })
                .catch(error => {
                    alert("네트워크 오류로 게시 등록에 실패하였습니다.")
                })
        }
    }

    titleIsExist = () => {
        let titleInput = document.getElementById("boardTitleInput");
        if (titleInput.value == "") {
            return false
        }
        return true
    }

    render() {
        return (
            <div className={"boardEditorContentsDiv"}>
                <div className={"newBoardTitleDiv"}>
                    <table className={"boardTitleTable"}>
                        <tbody>
                        <tr>
                            <td className={"boardTitleTag robotoFont"}> 제목 </td>
                            <td>
                                <input id={"boardTitleInput"} className={"notoSansFont"} type={"text"} placeholder={"제목을 입력하세요"} autoFocus={true}/>
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

export default BoardEditor