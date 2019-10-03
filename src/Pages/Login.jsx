import React, { Component } from 'react';
import Header from './Common/Header'
import Footer from "./Common/Footer";
import '../Css/common.css'
import '../Css/login.css'

class Login extends Component{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header/>
                <LoginHeader/>
                <LoginContents/>
                <Footer/>
            </div>
        )
    }
}

const LoginHeader = () => (
    <div className={"fullWidth loginHeaderDiv"}>
        <div className={"headerTextDiv"}>
            <div className={"loginHeaderTitle robotoFont"}> Login </div>
            <div className={"loginHeaderSubTitle notoSansFont"}> 로그인 </div>
        </div>
    </div>
)

const LoginContents = () => {
    return (
        <div className={"contents loginContentsDiv"}>
            <div className={"contentTitle"}>로그인</div>
            <div className={"contentSubtitle notoSansFont"}>Have a good day :-)</div>
            <form>
                <table className={"loginTable"}>
                    <tbody>
                        <tr>
                            <th className={"notoSansFont"}> 학번 </th>
                            <td><input className={"notoSansFont"} type={"text"} placeholder={"학번"} minLength={"9"} maxLength={"9"} required/></td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 비밀번호 </th>
                            <td><input className={"notoSansFont"} type={"password"} placeholder={"비밀번호"} minLength={"4"} maxLength={"20"} required/></td>
                        </tr>
                    </tbody>
                </table>

                <input className={"notoSansFont loginButton"} type={"submit"} value={"로그인"}/>
                <button className={"notoSansFont signUpButton"} onClick={() => {window.location.href="/join"}}>회원가입</button>
            </form>
        </div>
    )
}

export default Login