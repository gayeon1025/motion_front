import React, { Component } from 'react'
import Header from './Common/Header'
import Footer from "./Common/Footer"
import '../Css/common.css'
import '../Css/equipment-editor.css'
import * as cookies from "./Common/Cookies";
import * as equipmentService from '../Services/equipment';


class EquipmentEditor extends Component {
    render() {
        return (
            <div className={"fullWidth"}>
                <Header active={"equipment"}/>
                <EquipmentEditorHeader/>
                <EquipmentEditorContents/>
                <Footer/>
            </div>
        )
    }
}

const EquipmentEditorHeader = () => (
    <div className={"fullWidth equipmentHeaderDiv"}>
        <div className={"equipmentTextDiv"}>
            <div className={"equipmentHeaderTitle robotoFont"}> Equipment </div>
            <div className={"equipmentHeaderSubTitle notoSansFont"}> 물품대여 </div>
        </div>
    </div>
)

class EquipmentEditorContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : null,
        }
    }

    componentDidMount(): void {
        this.setState({userName : cookies.getCookie("userName")}, this.setToday)
    }

    setToday = () => {
        document.getElementById("startDate").valueAsDate = new Date();
    }

    storeRentalRecord = async () => {

        if (!await this.isValidateForm()) return;

        let registerConfirm = window.confirm("등록하시겠습니까?");
        if (!registerConfirm) {
            return;
        }

        let rentalRecord = {
            userId : cookies.getCookie("userId"),
            equipmentName : document.getElementById("equipmentName").value,
            quantity : document.getElementById("quantity").value,
            startDate : document.getElementById("startDate").value,
            endDate : document.getElementById("endDate").value,
        }

        equipmentService.addNewRental(rentalRecord)
            .then(response => {
                alert("저장되었습니다.");
                window.location.href = "/equipments";
            })
            .catch(error => {
                console.log("Fail to register new rental record : " + error);
            })
    }

    isValidateForm = () => {
        let equipmentName = document.getElementById("equipmentName").value;
        if (equipmentName == "" || equipmentName == null || equipmentName == undefined) {
            alert("물품명을 입력하세요");
            return false;
        }

        let quantity = document.getElementById("quantity").value;
        if (quantity <= 0) {
            alert("수량은 1개 이상이어야 합니다.");
            return false;
        }

        let startDate = document.getElementById("startDate").value;
        if (this.isPast(startDate)) {
            alert("오늘 이전의 날짜를 선택할 수 없습니다.");
            return false;
        }

        let endDate = document.getElementById("endDate").value;
        if (endDate === "" || endDate == null || endDate == undefined) {
            alert("반납일을 설정하세요");
            return false;
        }
        if (this.isPast(endDate)) {
            alert("오늘 이전의 날짜를 선택할 수 없습니다.");
            return false;
        }
        if (this.isOver30Days(startDate, endDate)) {
            alert("30일 이상 대여할 수 없습니다.");
            return false;
        }

        return true;
    }

    isPast = (selectedDate) => {
        const today = new Date();
        const inputDate = new Date(selectedDate);
        if (inputDate.getFullYear() < today.getFullYear()) return true;
        if (inputDate.getMonth() < today.getMonth()) return true;
        if (inputDate.getDay() < today.getDay()) return true;

        return false;
    }

    isOver30Days = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (start.getDate() + 30 < end.getDate()) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div className={"contents equipmentContentsDiv"}>
                <div className={"equipmentContentTitle"}>물품대여</div>
                <div className={"equipmentContentComment notoSansFont"}>대여를 위해 간단한 정보를 기입해 주세요!</div>
                <table className={"joinTable"}>
                    <tbody>
                    <tr>
                        <th className={"notoSansFont"}> 이름 </th>
                        <td><input id={"userName"} className={"notoSansFont"} type={"text"} value={this.state.userName} autoFocus value={this.state.userName} readOnly/></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 물품명 </th>
                        <td><input id={"equipmentName"} className={"notoSansFont"} type={"text"} placeholder={"물품명을 입력해주세요."} minLength={"9"} maxLength={"9"} required/></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 수량 </th>
                        <td><input id={"quantity"} className={"notoSansFont"} type={"number"} placeholder={"수량을 입력하세요."} min={"1"} required/></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 대여일 </th>
                        <td><input id={"startDate"} className={"notoSansFont"} type={"date"} required/></td>
                    </tr>
                    <tr>
                        <th className={"notoSansFont"}> 반납일 </th>
                        <td><input id={"endDate"} className={"notoSansFont"} type={"date"} required/></td>
                    </tr>
                    </tbody>
                </table>
                <button className={"notoSansFont borrowStuffButton"} onClick={() => {this.storeRentalRecord()}}>등록</button>
            </div>
        )
    }
}

export default EquipmentEditor
