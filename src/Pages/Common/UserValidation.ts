import * as accountService from "../../Services/accounts";

export const getUserLoginData: () => any = async () => {
    try {
        const response = await accountService.getUserLoginState();
        if (response) {
            return response.data;
        }
    } catch (e) {
        return e;
    }
};