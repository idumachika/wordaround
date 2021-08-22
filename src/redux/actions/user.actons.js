import { ApiService } from "../../services/apiService";
import { routes } from "../../services/urls";
import { userConstants } from "../constants/user.constant";


export const userActions = {
    login,
    logout,
    initStore
}

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        let data = {
            email: email,
            password: password,
            // deviceName: 'rdtr',
            // deviceOs: 'uhiu',
            // gcmRegId: '',
            // channelId: 2,
            // deviceCode: 'uytyyt',
            // imei: '123456789012345'
        };

        let consume = ApiService.request(routes.LOGIN, "POST", data);
        return consume
            .then(function (response) {
                console.log("this is the response", response)
                localStorage.setItem("user", JSON.stringify(response));
                dispatch(success(response));
                // history.push('/dashboard');
                // history.push('/home');
            }).catch(error => {
                console.log("this is the error ", error)
            });


    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(response) { return { type: userConstants.LOGIN_SUCCESS, response } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(type) {
    // userService.logout();
    //console.error("We are logging you out...");
    localStorage.clear();
    // history.push('/');
    // window.location.reload();
    return (dispatch) => {
        dispatch(logout());
    }
    function logout() { return { type: userConstants.LOGOUT } }
}

function initStore() {
    localStorage.clear();
    return (dispatch) => {
        dispatch(logout());
    }
    function logout() { return { type: userConstants.LOGOUT } }
}