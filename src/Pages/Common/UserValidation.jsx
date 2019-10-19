import axios from "axios";
import * as config from "../../Config/config";
import headerConfig from "../../Services/config";
import * as accountService from "../../Services/accounts";

export function addNewUser(userInfo) {
    return axios.post(config.BACK_SERVER_PREFIX + "/user/join", userInfo, headerConfig)
}

export async function getUserLoginState(component) {
    accountService.getUserLoginState()
        .then(await function(response) {
            let user = response.data;
            console.log(user);
            component.setState({loggedInUser : user})
            // if (user.userId == null) {
            //     this.setState({loginState : false}, () => {
            //         if (window.location.href != config.FRONT_SERVER_PREFIX + "/login" && window.location.href != config.FRONT_SERVER_PREFIX + "/home") {
            //             alert("로그인 후 이용해 주세요")
            //             window.location.href = "/login"
            //         }
            //     })
            // }
            // else {
            //     this.setState({loginState : true})
            // }
        })
        .catch(error => {
            console.log("Error for getting login state : " + error)
        })
}