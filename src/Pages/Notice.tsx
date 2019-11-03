import React, { FC, ReactNode } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/notice.css'
import Pagination from "./Common/Pagination";

const Notice: FC = () => {
    return (
        <div className={"fullWidth"}>
            <Header />
            {NoticeHeader}
            {NoticeContents}
            <Footer />
        </div>
    );
};

const NoticeHeader: ReactNode = (
    <div className={"fullWidth noticeHeaderDiv"}>
        <div className={"noticeTextDiv"}>
            <div className={"noticeHeaderTitle robotoFont"}> Notice </div>
            <div className={"noticeHeaderSubTitle notoSansFont"}> 공지사항 </div>
        </div>
    </div>
);

const NoticeContents: ReactNode = (
    <div className={"contents noticeContentsDiv"}>
        <div className={"noticeContentTitle"}>공지사항</div>
        <div className={"noticeTableDiv"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th className={"noticeNo"}>번호</th>
                        <th className={"noticeTitle"}>제목</th>
                        <th className={"noticeAuthor"}>작성자</th>
                        <th className={"noticeDate"}>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={"noticeNo"}>1</th>
                        <td className={"noticeTitle"}>첫 공지입니다.</td>
                        <td className={"noticeAuthor"}>김가연</td>
                        <td className={"noticeDate"}>2019.09.29</td>
                    </tr>
                    <tr>
                        <th className={"noticeNo"}>2</th>
                        <td className={"noticeTitle"}>콜라톤 관련 공지입니다.</td>
                        <td className={"noticeAuthor"}>김가연</td>
                        <td className={"noticeDate"}>2019.08.29</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    </div>
);

export default Notice;