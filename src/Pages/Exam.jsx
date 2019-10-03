import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/exam.css'
import Pagination from "./Common/Pagination";

class Exam extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                    <ExamHeader/>
                    <ExamContents/>
                <Footer/>
            </div>
        )
    }
}

const ExamHeader = () => (
    <div className={"fullWidth examHeaderDiv"}>
        <div className={"examTextDiv"}>
            <div className={"examHeaderTitle robotoFont"}> Exam </div>
            <div className={"examHeaderSubTitle notoSansFont"}> 기출문제 </div>
        </div>
    </div>
)

class ExamContents extends Component {
    render() {
        return (
            <div className={"contents examContentsDiv"}>
                <div className={"examContentTitle"}>기출문제</div>
                <div className={"examContents"}>
                    <GradeSelection/>
                </div>
            </div>
        )
    }
}

const SubjectSearch = () => (
    <div className={"searchDiv"}>
        <form>
            <input type={"search"} placeholder={"과목명을 입력하세요"} aria-label="SubjectSearch"/>
            <button>Search</button>
        </form>
    </div>
)

const GradeSelection = () => (
    <div className={"gradeSelectionDiv"}>
        <ul className="grades">
            <li className="grade-item">1학년</li>
            <li className="grade-item">2학년</li>
            <li className="grade-item">3학년</li>
            <li className="grade-item">4학년</li>
        </ul>
    </div>
)

export default Exam