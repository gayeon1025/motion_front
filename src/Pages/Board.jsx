import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/board.css'
import Pagination from "./Common/Pagination";
import * as boardService from "../Services/board";
import * as userValidation from "./Common/UserValidation";

class Board extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loggedInUser : userValidation.getUserLoginState(this),
        }
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                    <BoardHeader/>
                    <BoardContents userRoll={this.state.loggedInUser.userRoll} offset={this.props.match.params.offset} limit={this.props.match.params.limit}/>
                <Footer/>
            </div>
        )
    }
}

const BoardHeader = () => (
    <div className={"fullWidth boardHeaderDiv"}>
        <div className={"boardTextDiv"}>
            <div className={"boardHeaderTitle robotoFont"}> Board </div>
            <div className={"boardHeaderSubTitle notoSansFont"}> 게시판 </div>
        </div>
    </div>
)

class BoardContents extends Component {
    addNewPost = () => {
        window.location.href = "/board/new"
    }

    componentDidMount(): void {
        this.getPosts(this.props.offset, this.props.limit)
    }

    getPosts = (offset, limit) => {
        boardService.getPosts(offset, limit)
            .then(response => {
                let posts = response.data
                if (posts == null) {
                    this.printNoPost()
                    return
                }
            })
            .catch(error => {
                //Todo : Below is temporary. If you get error, you have to confirm error to user. (console.log)
                this.printNoPost()
            })

    }

    printNoPost = () => {
        document.getElementById("boardTableBody").innerHTML
            = "<tr>" +
                "<td colspan='4'>등록된 공지가 없습니다</td>" +
              "</tr>"

    }

    render() {
        return (
            <div className={"contents boardContentsDiv"}>
                <div className={"boardContentTitle"}>게시판</div>
                <div className={"boardContentComment notoSansFont"}>건의사항, 교육문의 등 자유롭게 질문해 주세요 :-)</div>
                <div className={"newPostButtonDiv fullWidth"} style={{display : this.props.userRoll == "ADMIN" || this.props.userRoll == "USER" ? "block" : "none"}}>
                    <button className={"newPostButton notoSansFont"} type={"button"} onClick={ this.addNewPost }>글쓰기</button>
                </div>
                <div className={"boardTableDiv"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th className={"noticeNo"}>번호</th>
                            <th className={"noticeTitle"}>제목</th>
                            <th className={"noticeAuthor"}>작성자</th>
                            <th className={"noticeDate"}>등록일</th>
                        </tr>
                        </thead>
                        <tbody id={"boardTableBody"}>
                        <tr>
                            <th className={"noticeNo"}>1</th>
                            <td className={"noticeTitle"}>콜라톤관련 문의드립니다.</td>
                            <td className={"noticeAuthor"}>김가연</td>
                            <td className={"noticeDate"}>2019.09.29</td>
                        </tr>
                        <tr>
                            <th className={"noticeNo"}>2</th>
                            <td className={"noticeTitle"}>컴파일러 과제 아시는분 구합니다!!!</td>
                            <td className={"noticeAuthor"}>이정준</td>
                            <td className={"noticeDate"}>2019.08.29</td>
                        </tr>
                        </tbody>
                    </table>
                    <Pagination/>
                </div>
            </div>
        )
    }
}
export default Board