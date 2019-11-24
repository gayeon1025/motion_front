import React, { FC, ReactNode, useState } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import '../Css/common.css';
import '../Css/join.css';
import * as accountService from '../Services/accounts';

interface InputState {
    userId: string;
    userPwd: string;
    userName: string;
    userPhone: string;
    userBirth: string;
    userEmail: string;
};

const Join: FC = () => {
    const [inputState, setInputState] = useState<InputState>({
        userId: '',
        userPwd: '',
        userName: '',
        userPhone: '',
        userBirth: '',
        userEmail: '',
    });

    const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        console.log(e.target.name, e.target.value);
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value,
        });
    };
    const addNewUser: () => void = () => {
        accountService.addNewUser(inputState)
            .then((response) => {
                if (response && response.data === "duplicatedKey") {
                    document.getElementById("infoMsgDiv")!.innerHTML = '이미 존재하는 회원입니다';
                    setTimeout(() => {
                        document.getElementById("infoMsgDiv")!.innerHTML = '';
                    }, 1500);
                }
                else if (response && response.data === 'error') {
                    alert('오류가 발생했습니다.');
                }
                else {
                    alert('환영합니다.');
                    window.location.href = '/home';
                }
            })
            .catch((error) => {
                console.log("Fail to add new user : " + error);
            });
    };

    const JoinContents: ReactNode = (
        <div className={"contents joinContentsDiv"}>
            <div className={"contentTitle"}>회원가입</div>
            <div className={"contentSubtitle notoSansFont"}>환영합니다 :-)</div>
            <table className={"joinTable"}>
                <tbody>
                    <tr>
                        <th className={"notoSansFont"}> 이름 </th>
                        <td><input value={inputState.userName} onChange={handleChange} name={"userName"} className={"notoSansFont"} type={"text"} placeholder={"이름"} autoFocus required /></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 학번 </th>
                        <td><input value={inputState.userId} onChange={handleChange} name={"userId"} className={"notoSansFont"} type={"text"} placeholder={"학번"} minLength={9} maxLength={9} required /></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 비밀번호 </th>
                        <td><input value={inputState.userPwd} onChange={handleChange} name={"userPwd"} className={"notoSansFont"} type={"password"} placeholder={"비밀번호"} minLength={4} maxLength={20} required /></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 전화번호 </th>
                        <td><input value={inputState.userPhone} onChange={handleChange} name={"userPhone"} className={"notoSansFont"} type={"tel"} placeholder={"'-'를 제외하고 입력해 주세요'"} required /></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 이메일 </th>
                        <td><input value={inputState.userEmail} onChange={handleChange} name={"userEmail"} className={"notoSansFont"} type={"email"} placeholder={"이메일"} /></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 생년월일 </th>
                        <td><input value={inputState.userBirth} onChange={handleChange} name={"userBirth"} className={"notoSansFont"} type={"date"} /></td>
                    </tr>
                </tbody>
            </table>

            <div className={"notoSansFont"} id={"infoMsgDiv"}></div>

            <button className={"notoSansFont signUpButton"} onClick={addNewUser}>회원가입</button>
            {/*<input className={"notoSansFont signUpButton"} type={"submit"} value={"회원가입"}/>*/}
        </div>
    );

    return (
        <div className={"fullWidth"}>
            <Header />
            {JoinHeader}
            {JoinContents}
            <Footer />
        </div>
    );
};

const JoinHeader: ReactNode = (
    <div className={"fullWidth joinHeaderDiv"}>
        <div className={"headerTextDiv"}>
            <div className={"joinHeaderTitle robotoFont"}> Join </div>
            <div className={"joinHeaderSubTitle notoSansFont"}> 회원가입 </div>
        </div>
    </div>
);

export default Join;