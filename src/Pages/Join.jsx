import React, { Component } from 'react';
import Header from '../Common/Header'
import Footer from "../Common/Footer";
import '../Css/common.css'
import '../Css/join.css'
import Rocket from "../Images/rocket.png";

class Join extends Component{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                    <JoinHeader/>
                    <JoinContents/>
                <Footer/>
            </div>
        )
    }
}

const JoinHeader = () => (
    <div className={"fullWidth joinHeaderDiv"}>
        <div className={"headerTextDiv"}>
            <div className={"joinHeaderTitle robotoFont"}> Join </div>
            <div className={"joinHeaderSubTitle notoSansFont"}> 회원가입 </div>
        </div>
    </div>
)

const JoinContents = () => {
    return (
        <div className={"contents joinContentsDiv"}>
            <div className={"contentTitle"}>회원가입</div>
            <div className={"contentSubtitle notoSansFont"}>환영합니다 :-)</div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th className={"notoSansFont"}> 이름 </th>
                            <td><input className={"notoSansFont"} type={"text"} placeholder={"이름"} autoFocus required/></td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 학번 </th>
                            <td><input className={"notoSansFont"} type={"text"} placeholder={"학번"} minLength={"9"} maxLength={"9"} required/></td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 비밀번호 </th>
                            <td><input className={"notoSansFont"} type={"password"} placeholder={"비밀번호"} minLength={"4"} maxLength={"20"} required/></td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 전화번호 </th>
                            <td><input className={"notoSansFont"} type={"tel"} placeholder={"'-'를 제외하고 입력해 주세요'"} required/></td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 이메일 </th>
                            <td><input className={"notoSansFont"} type={"email"} placeholder={"이메일"}/></td>
                        </tr><tr>
                            <th className={"notoSansFont"}> 생년월일 </th>
                            <td><input className={"notoSansFont"} type={"date"}/></td>
                        </tr>
                    </tbody>
                </table>

                <input className={"notoSansFont signUpButton"} type={"submit"} value={"회원가입"}/>
            </form>
        </div>
    )
}

export default Join