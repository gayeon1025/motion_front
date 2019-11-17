import React, { FC, ReactNode, useState, useEffect } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/board.css'
import Pagination from "./Common/Pagination";
import * as boardService from '../Services/board';
import * as userValidation from "./Common/UserValidation";

interface Props {
    offset: number;
    limit: number;
}

const Board: FC<Props> = ({
    offset, limit,
}) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchData: () => void = async () => {
            const userData = await userValidation.getUserLoginData();
            setUser(userData.data); 
        }

        fetchData();
    }, []);

    const getPosts: (offset: number, limit: number) => void = async (offset, limit) => {
        const response: any = await boardService.getPosts(offset, limit);
        if (response.data) {
            printNoPost();
        } else {
            printNoPost();
        }
    };

    const printNoPost: () => void = () => {
        if (document.getElementById("boardTableBody")) {
            document.getElementById("boardTableBody")!.innerHTML = `
            <tr>
                <td colspan='4'>등록된 게시글이 없습니다</td>
            </tr>
        `;
        }
    };

    getPosts(offset, limit);

    return (
        <div className={"fullWidth"}>
            <Header />
            <BoardHeader />
            <BoardContents
                userRoll={user.userRoll}
            />
            <Footer />
        </div>
    );
}

const BoardHeader: FC = () => {
    return (
        <div className={"fullWidth boardHeaderDiv"}>
            <div className={"boardTextDiv"}>
                <div className={"boardHeaderTitle robotoFont"}> Board </div>
                <div className={"boardHeaderSubTitle notoSansFont"}> 게시판 </div>
            </div>
        </div>
    );
};

interface ContentProps {
    userRoll: any;
}
const BoardContents: FC<ContentProps> = ({
    userRoll,
}) => {

    const addNewPost: () => void = () => {
        window.location.href = '/board/new';
    };

    return (
        <div className={"contents boardContentsDiv"}>
            <div className={"boardContentTitle"}>게시판</div>
            <div className={"boardContentComment notoSansFont"}>건의사항, 교육문의 등 자유롭게 질문해 주세요 :-)</div>
            <div className={"newPostButtonDiv fullWidth"} style={{ display: userRoll == "ADMIN" || userRoll == "USER" ? "block" : "none" }}>
                <button className={"newPostButton notoSansFont"} type={"button"} onClick={addNewPost}>글쓰기</button>
            </div>
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
                    <tbody id={"boardTableBody"}>
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
};
export default Board;