import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/education.css'
import Pagination from "./Common/Pagination";
import * as cookies from "./Common/Cookies";
import * as EduService from '../Services/educations';

class Education extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                    <EduHeader/>
                    <EduContents
                        offset={this.props.match.params.offset}
                        limit={this.props.match.params.limit}
                    />
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
    constructor(props) {
        super(props);
        this.state = {
            userRoll : null,
        }
    }

    componentDidMount(): void {
        this.setState({userRoll : cookies.getCookie("userRoll")});
        this.getEducations(this.props.offset, this.props.limit);
    }

    getEducations = (offset, limit) => {
        EduService.getEducations(offset, limit)
            .then((response) => {
                const educations = response.data;
                if (educations == null) {
                    this.printNoEducation();
                    return;
                }
                this.printEducations(educations);
            })
            .catch(() => {
                // Todo : Below is temporary.
                // If you get error, you have to confirm error to user. (console.log)
                this.printNoEducation();
            });
    }

    printEducations = (educations) => {
        const tbody = document.getElementById("educationTableBody");
        tbody.innerHTML = '';
        for (let i=0; i<educations.length; i++) {
            let eduNo = this.createThElement("eduNo", educations[i].order); // Todo : DB에서 orderby해서 최신순으로 게시물 번호를 매겨서 return 해야함!
            let eduTitle = this.createThElement("eduTitle", educations[i].title);
            let eduAuthor = this.createThElement("eduAuthor", educations[i].userName); // Todo : DB에서 userId로 조인해서 유저의 이름을 알아와야함
            let state = this.createThElement("eduState", educations[i].state); // Todo : back에서 처리해서 가져올 것! (진행예정, 진행중, 종료)
            let eduDate = this.createThElement("eduDate", educations[i].startDate + " - " + educations[i].endDate);

            let tr = document.createElement('tr');
            tr.appendChild(eduNo);
            tr.appendChild(eduTitle);
            tr.appendChild(eduAuthor);
            tr.appendChild(state);
            tr.appendChild(eduDate);

            tbody.appendChild(tr);
        }
    }

    createThElement = (className, content) => {
        let thElement = document.createElement('th');
        thElement.setAttribute('className', className);
        thElement.innerText = content;

        return thElement;
    }

    printNoEducation = () => {
        document.getElementById('educationTableBody').innerHTML = '<tr> <td colspan=\'5\'>등록된 게시글이 없습니다</td> </tr>';
    }

    addNewEducation = () => {
        window.location.href = "/edu/new";
    }

    render() {
        return (
            <div className={"contents eduContentsDiv"}>
                <div className={"eduContentTitle"}>교육</div>
                <div className={"eduContentComment notoSansFont"}>교육명을 선택하면 상세정보를 확인하실 수 있습니다</div>
                <div className="newEduButtonDiv fullWidth" style={{ display: (this.state.userRoll != null) && (this.state.userRoll === 'ADMIN' || this.state.userRoll === 'USER') ? 'block' : 'none' }}>
                    <button className="newEduButton notoSansFont" type="button" onClick={this.addNewEducation}>교육 등록</button>
                </div>
                <div className={"eduTableDiv"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th className={"eduNo"}>번호</th>
                            <th className={"eduTitle"}>교육명</th>
                            <th className={"eduAuthor"}>담당자</th>
                            <th className={"eduState"}>진행여부</th>
                            <th className={"eduDate"}>진행기간</th>
                        </tr>
                        </thead>
                        <tbody id={"educationTableBody"}>
                            <tr>
                                <th className={"eduNo"}>1</th>
                                <td className={"eduTitle"}>안드로이드 교육</td>
                                <td className={"eduAuthor"}>이정준</td>
                                <td className={"eduState"}>진행중</td>
                                <td className={"eduDate"}>2019.09.29</td>
                            </tr>
                            <tr>
                                <th className={"eduNo"}>2</th>
                                <td className={"eduTitle"}>Spring 교육</td>
                                <td className={"eduAuthor"}>김가연</td>
                                <td className={"eduState"}>진행 예정</td>
                                <td className={"eduDate"}>2019.10.01</td>
                            </tr>
                            <tr>
                                <th className={"eduNo"}>3</th>
                                <td className={"eduTitle"}>기초 Java 교육</td>
                                <td className={"eduAuthor"}>이정준</td>
                                <td className={"eduState"}>종료</td>
                                <td className={"eduDate"}>2019.05.29</td>
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
