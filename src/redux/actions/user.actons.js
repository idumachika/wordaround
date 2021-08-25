import { ApiService } from "../../services/apiService";
import { routes } from "../../services/urls";
import { userConstants } from "../constants/user.constant";
import axios from "axios";



export const userActions = {
    login,
    logout,
    signUp,
    initStore
}



function login(email, password) {
    console.log("this is the action files ", email, password)
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

        let consume = axios.post(routes.LOGIN, data, {

            // headers
        });
        console.log('tag===========', consume)
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

function signUp(name, email, password, confirm_password) {
    console.log("this is the action files ", email, password)
    return dispatch => {
        dispatch(request({ email }));
        let data = {
            name: name,
            email: email,
            password: password,
            confirm_password: confirm_password,

        };

        let consume = axios.post(routes.SIGNUP, data, {

            // headers
        });
        console.log('tag===========', consume)
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

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(response) { return { type: userConstants.SIGNUP_SUCCESS, response } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
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