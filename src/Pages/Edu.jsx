import React, { Component } from 'react'
import Header from '../Common/Header'
import Footer from "../Common/Footer"
import '../Css/common.css'
import '../Css/education.css'
import Pagination from "../Common/Pagination";

class Education extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                    <EduHeader/>
                    <EduContents/>
                <Footer/>
            </div>
        )
    }
}

const EduHeader = () => (
    <div className={"fullWidth eduHeaderDiv"}>
        <div className={"eduTextDiv"}>
            <div className={"eduHeaderTitle robotoFont"}> Education </div>
            <div className={"eduHeaderSubTitle notoSansFont"}> 교육 </div>
        </div>
    </div>
)

class EduContents extends Component {
    render() {
        return (
            <div className={"contents eduContentsDiv"}>
                <div className={"eduContentTitle"}>교육</div>
                <div className={"eduContentComment notoSansFont"}>교육명을 선택하면 상세정보를 확인하실 수 있습니다</div>
                <div className={"eduTableDiv"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th className={"noticeNo"}>번호</th>
                            <th className={"noticeTitle"}>교육명</th>
                            <th className={"noticeAuthor"}>담당자</th>
                            <th className={"noticeAuthor"}>진행</th>
                            <th className={"noticeDate"}>교육 시작</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className={"noticeNo"}>1</th>
                                <td className={"noticeTitle"}>안드로이드 교육</td>
                                <td className={"noticeAuthor"}>이정준</td>
                                <td className={"noticeAuthor"}>진행중</td>
                                <td className={"noticeDate"}>2019.09.29</td>
                            </tr>
                            <tr>
                                <th className={"noticeNo"}>2</th>
                                <td className={"noticeTitle"}>Spring 교육</td>
                                <td className={"noticeAuthor"}>김가연</td>
                                <td className={"noticeAuthor"}>진행 예정</td>
                                <td className={"noticeDate"}>2019.10.01</td>
                            </tr>
                            <tr>
                                <th className={"noticeNo"}>3</th>
                                <td className={"noticeTitle"}>기초 Java 교육</td>
                                <td className={"noticeAuthor"}>이정준</td>
                                <td className={"noticeAuthor"}>종</td>
                                <td className={"noticeDate"}>2019.05.29</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination/>
                </div>
            </div>
        )
    }
}

export default Education