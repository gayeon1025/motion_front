import React, { FC, ReactNode } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/board.css'
import Pagination from "./Common/Pagination";

const Board: FC = () => {
    return (
        <div className={"fullWidth"}>
            <Header />
            {BoardHeader}
            {BoardContents}
            <Footer />
        </div>
    );
}

const BoardHeader: ReactNode = (
    <div className={"fullWidth boardHeaderDiv"}>
        <div className={"boardTextDiv"}>
            <div className={"boardHeaderTitle robotoFont"}> Board </div>
            <div className={"boardHeaderSubTitle notoSansFont"}> 게시판 </div>
        </div>
    </div>
);

const BoardContents: ReactNode = (
    <div className={"contents boardContentsDiv"}>
        <div className={"boardContentTitle"}>게시판</div>
        <div className={"boardContentComment notoSansFont"}>건의사항, 교육문의 등 자유롭게 질문해 주세요 :-)</div>

        <div className={"boardTableDiv"}>
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
                        <td className={"noticeTitle"}>콜라톤관련 문의드립니다.</td>
                        <td className={"noticeAuthor"}>김가연</td>
                        <td className={"noticeDate"}>2019.09.29</td>
                    </tr>
                    <tr>
                        <th className={"noticeNo"}>2</th>
                        <td className={"noticeTitle"}>컴파일러 과제 아시는분 구합니다!!!</td>
                        <td className={"noticeAuthor"}>이정준</td>
                        <td className={"noticeDate"}>2019.08.29</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    </div>
);

export default Board;