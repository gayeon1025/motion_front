import React, { FC, ReactNode } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/equipment.css'
import Pagination from "./Common/Pagination";

const Equipment: FC = () => {
    return (
        <div className={"fullWidth"}>
            <Header />
            {EquipmentHeader}
            {EquipmentContents}
            <Footer />
        </div>
    )
};

const EquipmentHeader: ReactNode = (
    <div className={"fullWidth equipmentHeaderDiv"}>
        <div className={"equipmentTextDiv"}>
            <div className={"equipmentHeaderTitle robotoFont"}> Equipment </div>
            <div className={"equipmentHeaderSubTitle notoSansFont"}> 물품대여 </div>
        </div>
    </div>
);

const EquipmentContents: ReactNode = (
    <div className={"contents equipmentContentsDiv"}>
        <div className={"equipmentContentTitle"}>물품대여</div>
        <div className={"equipmentContentComment notoSansFont"}>다음 사람을 위해 물품은 소중히 다뤄주세요 :-)</div>

        <div className={"borrowButtonDiv fullWidth"}>
            <button className={"borrowButton notoSansFont"} type={"button"}>대여하기</button>
        </div>
        <div className={"equipmentTableDiv"}>
            <table className={"table"}>
                <thead>
                    <tr>
                        <th className={"equipmentNo"}>번호</th>
                        <th className={"equipmentTitle"}>물품명</th>
                        <th className={"equipmentAuthor"}>대여자</th>
                        <th className={"equipmentAuthor"}>대여상황</th>
                        <th className={"equipmentDate"}>대여일</th>
                        <th className={"equipmentDate"}>반납 예정일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={"equipmentNo"}>1</th>
                        <td className={"equipmentName"}>HDMI 케이블</td>
                        <td className={"equipmentdBorrower"}>김가연</td>
                        <td className={"equipmentSituation"}>대여중</td>
                        <td className={"equipmentDateStart"}>2019.09.09</td>
                        <td className={"equipmentDateEnd"}>2019.10.12</td>
                    </tr>
                    <tr>
                        <th className={"equipmentNo"}>2</th>
                        <td className={"equipmentName"}>보드마카</td>
                        <td className={"equipmentdBorrower"}>김가연</td>
                        <td className={"equipmentSituation"}>반납일 초과</td>
                        <td className={"equipmentDateStart"}>2019.04.09</td>
                        <td className={"equipmentDateEnd"}>2019.04.09</td>
                    </tr>
                    <tr>
                        <th className={"equipmentNo"}>3</th>
                        <td className={"equipmentName"}>선행대수 책</td>
                        <td className={"equipmentBorrower"}>김가연</td>
                        <td className={"equipmentSituation"}>반납 완료</td>
                        <td className={"equipmentDateStart"}>2019.08.09</td>
                        <td className={"equipmentDateEnd"}>2019.08.19</td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    </div>
);

export default Equipment;