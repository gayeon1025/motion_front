import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/equipment.css'
import Pagination from "./Common/Pagination";

class Equipment extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"equipment"}/>
                    <EquipmentHeader/>
                    <EquipmentContents/>
                <Footer/>
            </div>
        )
    }
}

const EquipmentHeader = () => (
    <div className={"fullWidth equipmentHeaderDiv"}>
        <div className={"equipmentTextDiv"}>
            <div className={"equipmentHeaderTitle robotoFont"}> Equipment </div>
            <div className={"equipmentHeaderSubTitle notoSansFont"}> 물품대여 </div>
        </div>
    </div>
)

class EquipmentContents extends Component {

    registerNewRentalRecord = () => {
        window.location.href = "/equipments/new"
    }

    render() {
        return (
            <div className={"contents equipmentContentsDiv"}>
                <div className={"equipmentContentTitle"}>물품대여</div>
                <div className={"equipmentContentComment notoSansFont"}>다음 사람을 위해 물품은 소중히 다뤄주세요 :-)</div>

                <div className={"borrowButtonDiv fullWidth"}>
                    <button className={"borrowButton notoSansFont"} type={"button"} onClick={() => {this.registerNewRentalRecord()}}>대여하기</button>
                </div>
                <div className={"equipmentTableDiv"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th className={"equipmentNo"}>번호</th>
                            <th className={"equipmentName"}>물품명</th>
                            <th className={"equipmentQuantity"}>수량</th>
                            <th className={"equipmentBorrower"}>대여자</th>
                            <th className={"equipmentState"}>대여상황</th>
                            <th className={"equipmentDateStart"}>대여일</th>
                            <th className={"equipmentDateEnd"}>반납 예정일</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className={"equipmentNo"}>1</th>
                                <td className={"equipmentName"}>HDMI 케이블</td>
                                <td className={"equipmentQuantity"}>2</td>
                                <td className={"equipmentBorrower"}>김가연</td>
                                <td className={"equipmentState"}>대여중</td>
                                <td className={"equipmentDateStart"}>2019.09.09</td>
                                <td className={"equipmentDateEnd"}>2019.10.12</td>
                            </tr>
                            <tr>
                                <th className={"equipmentNo"}>2</th>
                                <td className={"equipmentName"}>보드마카</td>
                                <td className={"equipmentQuantity"}>1</td>
                                <td className={"equipmentBorrower"}>김가연</td>
                                <td className={"equipmentState"}>반납일 초과</td>
                                <td className={"equipmentDateStart"}>2019.04.09</td>
                                <td className={"equipmentDateEnd"}>2019.04.09</td>
                            </tr>
                            <tr>
                                <th className={"equipmentNo"}>3</th>
                                <td className={"equipmentName"}>선행대수 책</td>
                                <td className={"equipmentQuantity"}>1</td>
                                <td className={"equipmentBorrower"}>김가연</td>
                                <td className={"equipmentSituation"}>반납 완료</td>
                                <td className={"equipmentDateStart"}>2019.08.09</td>
                                <td className={"equipmentDateEnd"}>2019.08.19</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination/>
                </div>
            </div>
        )
    }
}

export default Equipment
