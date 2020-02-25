import React, { Component } from 'react';
import Logo from '../../Images/motion_logo.png';
import '../../Css/common.css'
import '../../Css/header.css';
import * as config from "../../Config/config"
import * as accountService from "../../Services/accounts"
import * as cookies from './Cookies'
import a from "eslint-plugin-jsx-a11y/src/util/implicitRoles/a";

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userRoll : null,
        }
    }

    componentDidMount(): void {
        this.setState({userRoll : cookies.getCookie("userRoll")}, () => { this.appendMenu() });
        this.activeMenu(this.props.active);
    }

    appendMenu = () => {
        if (this.state.userRoll == null) return;

        const ul = document.getElementsByClassName("nav")[0];
        let li = null;
        if (this.state.userRoll == 'ADMIN') {
            li = this.createNewMenuLiTag("관리자 페이지");
        }
        else if (this.state.userRoll == 'USER') {
            li = this.createNewMenuLiTag("내 페이지");
        }
        ul.appendChild(li);

        document.getElementById("menuContainer").style.marginLeft = "20px";
    }

    createNewMenuLiTag = (menuText) => {
        const aTag = document.createElement('a');
        aTag.setAttribute('class', 'menuText');
        aTag.innerText = menuText;

        const li = document.createElement('li');
        li.setAttribute('class', 'navMenu');
        li.appendChild(aTag);

        return li;
    }

    logout = () => {
        let logout = window.confirm("로그아웃 하시겠습니까?")
        if (logout) {
            // Remove cookies
            cookies.deleteCookie(['studentId', 'userName', 'userRoll']);
            this.setState({userRoll : null}, () => {
                this.setState({loginState : false})
                alert("로그아웃 되었습니다");
            });
        }
        else {
            alert("취소")
        }
    }

    // moveToTargetPage = async (event, targetLocation) => {
    //     this.inactiveMenu();
    //     await event.target.classList.add("active");
    //
    //     window.location.href = targetLocation;
    // }

    activeMenu = (activeMenu) => {
        // First, inactive previous active menu highlight
        let menuATags = document.getElementsByClassName("menuText");
        for (let i=0; i<menuATags.length; i++) {
            menuATags[i].classList.remove("active");
        }

        // Active current menu
        document.getElementsByClassName(activeMenu)[0].classList.add("active");
    }

    render() {
        return (
            <div>
                <div id={"headerBar"} >
                    <nav id={"navigation"}>
                        <LogoContainer/>
                        <div id="menuContainer" className={"horizontal"}>
                            <ul className="nav navbar-nav navbar-right menu-top">
                                <li className = { "navMenu" }><a className="home menuText" href="/home">Home</a></li>
                                <li className = { "navMenu" }><a className="notice menuText" href="/notices/1/15">공지사항 </a></li>
                                <li className = { "navMenu" }><a className="board menuText" href="/boards/1/15">게시판</a></li>
                                <li className = { "navMenu" }><a className="calendar menuText" href="/calendar">일정</a></li>
                                <li className = { "navMenu" }><a className="edu menuText" href="/edu/1/15">교육</a></li>
                                <li className = { "navMenu" }><a className="exam menuText" href="/exams">기출문제</a></li>
                                <li className = { "navMenu" }><a className="equipment menuText" href="/equipments">물품대여</a></li>
                                <li className = { "navMenu" }><a className="gallery menuText" href="/gallery">사진첩</a></li>
                                <li className = { "navMenu" } >
                                    { this.state.userRoll ? (<a className="menuText" onClick={() => {this.logout()}}>로그아웃</a>) : (<a className="login menuText" href="/login">로그인</a>)}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className={"mainPhoto"}>
                    <svg className="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%"
                         height="100" viewBox="0 0 85 100" preserveAspectRatio="none">
                        <path
                            d="M-5 100 Q 0 20 5 100 ZM0 100 Q 5 0 10 100M5 100 Q 10 30 15 100M10 100 Q 15 10 20 100M15 100 Q 20 30 25 100M20 100 Q 25 -10 30 100M25 100 Q 30 10 35 100M30 100 Q 35 30 40 100M35 100 Q 40 10 45 100M40 100 Q 45 50 50 100M45 100 Q 50 20 55 100M50 100 Q 55 40 60 100M55 100 Q 60 60 65 100M60 100 Q 65 50 70 100M65 100 Q 70 20 75 100M70 100 Q 75 45 80 100M75 100 Q 80 30 85 100M80 100 Q 85 20 90 100M85 100 Q 90 50 95 100M90 100 Q 95 25 100 100M95 100 Q 100 15 105 100 Z"></path>
                    </svg>
                </div>
            </div>
        )
    }
}

const LogoContainer = () => (
    <div id="logoContainer" className={"horizontal"}>
        <a className="headerLogo" href="/home"><img className="headerLogo" src={ Logo } alt="image"/></a>
    </div>
)

export default Header;
