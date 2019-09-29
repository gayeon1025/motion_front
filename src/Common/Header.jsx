import React, { Component } from 'react';
import Logo from '../Images/motion_logo.png';
import '../Css/common.css'
import '../Css/header.css';

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div id={"headerBar"} >
                <nav id={"navigation"}>
                        <LogoContainer/>
                        <MenuContainer/>
                </nav>
            </div>
        )
    }
}

const LogoContainer = () => (
    <div id="logoContainer" className={"horizontal"}>
        <a className="headerLogo" href="/home"><img className="headerLogo" src={ Logo } alt="image"/></a>
    </div>
)
const MenuContainer = () => (
    <div id="menuContainer" className={"horizontal"}>
        <ul className="nav navbar-nav navbar-right menu-top">
            <li className = { "navMenu" }><a className="active menuText" href="index.html">Home</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/about.html">공지사항 </a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/services.html">게시판</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/case-study.html">일정</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/pricing.html">교육</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/pricing.html">기출문제</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/contact.html">물품대여</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/contact.html">사진첩</a></li>
            <li className = { "navMenu" }><a className="menuText" href="../../../../../../Downloads/flaxseo/contact.html">로그인</a></li>
        </ul>
    </div>
)

export default Header;