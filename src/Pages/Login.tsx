import React, { useState, FC, ReactNode } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import '../Css/common.css';
import '../Css/login.css';
import * as accountService from '../Services/accounts';

const Login: FC = () => {
    const [userId, setUserId] = useState<string>('');
    const [userPwd, setUserPwd] = useState<string>('');

    const login = () => {
        const userInfo = {
            userId,
            userPwd,
        };
        accountService.login(userInfo)
            .then((response) => {
                if (response) {
                    successToLogin(response.data);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    const successToLogin: (data: any) => void = (data) => {
        if (data === true) {
            alert("로그인 성공!");
            // Do not use window.location.href it will destory redux store
            window.location.href = "/home";
            // let state = loginService.getUserLoginState().then(response => console.log(response))
        }
        else {
            alert("잘못된 유저 정보입니다")
        }
    }

    // const failToLogin: (error: any) => void = (error) => {
    //      alert(error);
    //      alert("잘못된 유저 정보입니다.")
    // };

    const handleIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        setUserId(event.target.value);
    };

    const handlePwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        setUserPwd(event.target.value);
    };

    const LoginContents: ReactNode = (
            <div className={"contents loginContentsDiv"}>
                <div className={"contentTitle"}>로그인</div>
                <div className={"contentSubtitle notoSansFont"}>Have a good day :-)</div>
                {/*<form action={"http://localhost:8000/login"} method={"POST"}>*/}
                <table className={"loginTable"}>
                    <tbody>
                        <tr>
                            <th className={"notoSansFont"}> 학번 </th>
                            <td>
                                <input
                                    onChange={handleIdChange}
                                    value={userId}
                                    id={"userId"}
                                    name={"username"}
                                    className={"notoSansFont"}
                                    type={"text"}
                                    placeholder={"학번"}
                                    minLength={9}
                                    maxLength={9}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className={"notoSansFont"}> 비밀번호 </th>
                            <td>
                                <input
                                    onChange={handlePwdChange}
                                    value={userPwd}
                                    id={"userPwd"}
                                    name={"password"}
                                    className={"notoSansFont"}
                                    type={"password"}
                                    placeholder={"비밀번호"}
                                    minLength={4}
                                    maxLength={20}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/*<input className={"notoSansFont loginButton"} type={"submit"} value={"로그인"}/>*/}
                <button className={"notoSansFont loginButton"} onClick={() => { login() }}> 로그인</button>
                <button className={"notoSansFont signUpButton"} onClick={() => { window.location.href = "/join" }}>회원가입</button>
                {/*</form>*/}
            </div>
        );

    return (
        <div className={"fullWidth"}>
            <Header />
                {LoginHeader}
                {LoginContents}
            <Footer />
        </div>
    );
};

const LoginHeader: ReactNode =
    (
        <div className={"fullWidth loginHeaderDiv"}>
            <div className={"headerTextDiv"}>
                <div className={"loginHeaderTitle robotoFont"}> Login </div>
                <div className={"loginHeaderSubTitle notoSansFont"}> 로그인 </div>
            </div>
        </div>
    );


export default Login;