import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/notice.css'
import Pagination from "./Common/Pagination";
import * as noticeService from '../Services/notice'
import * as cookies from "./Common/Cookies";

class Notice extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"notice"}/>
                    <NoticeHeader/>
                    <NoticeContents offset={this.props.match.params.offset} limit={this.props.match.params.limit}/>
                <Footer/>
            </div>
        )
    }
}

const NoticeHeader = () => (
    <div className={"fullWidth noticeHeaderDiv"}>
        <div className={"noticeTextDiv"}>
            <div className={"noticeHeaderTitle robotoFont"}> Notice </div>
            <div className={"noticeHeaderSubTitle notoSansFont"}> 공지사항 </div>
        </div>
    </div>
)

class NoticeContents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRoll : null,
        }
    }

    addNewNotice = () => {
        window.location.href = "/notice/new"
    }

    componentDidMount(): void {
        this.setState({userRoll : cookies.getCookie("userRoll")});
        this.getNotices(this.props.offset, this.props.limit)
    }

    getNotices = (offset, limit) => {
        noticeService.getNotices(offset, limit)
            .then(response => {
                let notices = response.data
                if (notices == null) {
                    this.printNoNotices()
                    return
                }
            })
            .catch(error => {
                //Todo : Below is temporary. If you get error, you have to confirm error to user. (console.log)
                this.printNoNotices()
            })
    }

    printNoNotices = () => {
        document.getElementById("noticeTableBody").innerHTML
        = "<tr>" +
            "<td colspan='4'>등록된 공지가 없습니다</td>" +
          "</tr>"

    }

    render() {
        return (
            <div className={"contents noticeContentsDiv"}>
                <div className={"noticeContentTitle"}>공지사항</div>
                <div className={"newNoticeButtonDiv fullWidth"} style={{display : this.state.userRoll == "ADMIN" ? "block" : "none"}}>>
                    <button className={"newNoticeButton notoSansFont"} type={"button"} onClick={ this.addNewNotice }>글쓰기</button>
                </div>
                <div className={"noticeTableDiv"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th className={"noticeNo"}>번호</th>
                            <th className={"noticeTitle"}>제목</th>
                            <th className={"noticeAuthor"}>작성자</th>
                            <th className={"noticeDate"}>등록일</th>
                        </tr>
                        </thead>
                        <tbody id={"noticeTableBody"}>
                        </tbody>
                    </table>
                    <Pagination/>
                </div>
            </div>
        )
    }
}

export default Notice
