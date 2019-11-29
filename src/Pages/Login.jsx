import React, { Component } from 'react';
import Header from './Common/Header'
import Footer from "./Common/Footer";
import '../Css/common.css'
import '../Css/login.css'
import * as accountService from "../Services/accounts"

class Login extends Component{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"login"}/>
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

class LoginContents extends Component{

    constructor (props) {
        super(props)
        this.state = {
            userId  : "",
            userPwd : ""
        }
    }

    login = () => {
        let userInfo = {
            userId : (document.getElementById("userId").value).trim(),
            userPwd : (document.getElementById("userPwd").value).trim()
        }
        accountService.login(userInfo)
            .then(response => {
                this.successToLogin(response.data)
            })
            .catch(function (error) {
                alert(error)
            })
    }

    successToLogin = async (user) => {
        if (user.userId != null) {
            await this.setCookie(user);

            window.location.href = "/home"
        }
        else {
            alert("잘못된 유저 정보입니다")
        }
    }

    setCookie = (user) => {
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // 하루동안만 로그인정보 유지

        let expiration_value = '; expires=' + expirationDate.toDateString();
        document.cookie =  'userId' + '=' + user.userId + expiration_value;
        document.cookie =  'userRoll' + '=' + user.userRoll + expiration_value;
        document.cookie =  'userName' + '=' + user.userName + expiration_value;
    }

    render() {
        return (
            <div className={"contents loginContentsDiv"}>
                <div className={"contentTitle"}>로그인</div>
                <div className={"contentSubtitle notoSansFont"}>Have a good day :-)</div>
                <table className={"loginTable"}>
                    <tbody>
                    <tr>
                        <th className={"notoSansFont"}> 학번 </th>
                        <td><input id={"userId"} name={"username"} className={"notoSansFont"} type={"text"} placeholder={"학번"} minLength={"9"} maxLength={"9"} required/></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 비밀번호 </th>
                        <td><input id={"userPwd"} name={"password"} className={"notoSansFont"} type={"password"} placeholder={"비밀번호"} minLength={"4"} maxLength={"20"} required/></td>
                    </tr>
                    </tbody>
                </table>

                <button className={"notoSansFont loginButton"} onClick={() => {this.login()}}>로그인</button>
                <button className={"notoSansFont signUpButton"} onClick={() => {window.location.href="/join"}}>회원가입</button>
            </div>
        )
    }
}

export default Login
