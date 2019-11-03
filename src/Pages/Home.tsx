import React, { ReactNode, FC } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import '../Css/common.css';
import '../Css/home.css';

import Rocket from '../Images/rocket.png';
import Competition from '../Images/competition.png';
import Seminar from '../Images/seminar.png';
import Mentoring from '../Images/mentor.png';
import Network from '../Images/network.png';
// import IntroVideo from '../Video/introVideo.mp4';

const Home: FC = () => {
    return (
        <div className={"fullWidth homeDiv"}>
            <Header />
            {Main}
            {IntroVideoSection}
            <hr />
            {ActivitySection}
            {JoinSection}
            <Footer />
        </div>
    );
};

const Main: ReactNode = (
    <div className={"fullWidth mainDiv"}>
        <div className={"mainTextContainer"}>
            <div className={"slogan"}> Set revolution in MOTION </div>
            <div className={"comment"}> 새로운 움직임에 함께 할 당신을 초대합니다. </div>
            <div className={"joinButton"} onClick={() => { window.location.href = "/join" }}>함께하기</div>
        </div>
        <img className={"rocket"} src={Rocket} alt={'Rocket'} />
    </div>
);

const IntroVideoSection: ReactNode = (
    <div className={"contents introDiv"}>
        <div className={"videoDiv horizontal"}>
            {/* <video className={"introVideo"} src={IntroVideo} controls /> */}
        </div>
        <div className={"introCommentDiv horizontal"}>
            <div className={"IntroComment"}> Welcome! </div>
            <div className={"IntroTitle"}> We are MOTION </div>
            <div className={"IntroContent"}>
                Motion은 Mobile + Revolution 의 합성어로 모바일 어플리케이션 시장이 주목을 받기 시작하며 2007년에 생겨났습니다.
                    CNU 어플리케이션, 중고장터 등 다양한 어플리케이션을 선보였고, 이제는 모바일을 넘어선 어플리케이션을 바라보며 공부하고 나아가고 있습니다.<br /><br />
                <span> Motion이 또 다른 Revolution을 향해 나아갈 길을 함께 해주세요. </span>
            </div>
        </div>
    </div>
);

const ActivitySection: ReactNode = (
    <div className={"contents"}>
        <div className={"activityDiv"}>
            <div className={"activityTitle"}> What we are doing </div>
            <div className={"activityComment"}>
                Motion은 세미나, 멘토링, 공모전, 네트워킹 등 다양한 기회를 제공하고 있습니다.<br />
                주저하지 말고 함께 참여해 주세요.<br />
                함께라면 더 많이 배우고 나누며 성장할 것입니다.
                </div>
            <div className={"activityCardDiv"}>
                <div className={"row"}>
                    <div className={"column card"}>
                        <div className={"imageBorder"}>
                            <img className={"cardImage"} src={Seminar} alt={'Seminar'} />
                        </div>
                        <div className={"cardTitle"}>
                            Seminar
                            </div>
                        <div className={"cardContents"}>
                            신입생을 위한 기본 Java, C 교육 뿐만 아니라 Android, Swift, Spring 등 다양한 교육을 진행하고 있습니다. 동아리원들의 다양한 수요에 맞춰 매년 다양한 교육을 구성하고 있습니다.
                            </div>
                    </div>
                    <div className={"column card"}>
                        <div className={"imageBorder"}>
                            <img className={"cardImage"} src={Mentoring} alt={'Mentoring'} />
                        </div>
                        <div className={"cardTitle"}>
                            Mentoring
                            </div>
                        <div className={"cardContents"}>
                            학기 초, 선배가 멘토가 되어 신입생 분들의 학업과 학교생활을 원활히 할 수 있도록 멘토링을 시행하고 있습니다. 어려웠던 수업내용 혹은 동아리 생활 등 무엇이든 물어보셔도 좋습니다.
                            </div>
                    </div>
                    <div className={"column card"}>
                        <div className={"imageBorder"}>
                            <img className={"cardImage"} src={Competition} alt={'Competition'} />
                        </div>
                        <div className={"cardTitle"}>
                            Contest
                            </div>
                        <div className={"cardContents"}>
                            모션은 도전을 좋아합니다. 열정있는 모션과 함께 공모전에도 도전해 보세요. 매년 모션이 자체적으로 개최하는 '콜라톤'의 일원이 되어 함께 만들어 나가는 것도 너무 좋습니다 :-)
                            </div>
                    </div>
                    <div className={"column card"}>
                        <div className={"imageBorder"}>
                            <img className={"cardImage"} src={Network} alt={'Network'} />
                        </div>
                        <div className={"cardTitle"}>
                            Network
                            </div>
                        <div className={"cardContents"}>
                            선배들과의 만남을 위해 매년 '홈커밍 데이'를 주최하고 있습니다. 본인의 꿈과 조금 더 가까이 다다간 선배들에게 조언을 구할 수 있도록 네트워킹의 기회를 제공합니다.
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const JoinSection: ReactNode = (

    <div className={""}>
        <div className={"joinDiv"} onClick={() => { window.location.href = "/join" }}>
            Interesting MOTION? Join us
            </div>
    </div>
);

export default Home;