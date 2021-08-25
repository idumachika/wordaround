import { userConstants } from "../constants/user.constant";
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

 export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {
                ...state
            };
        default:
            return state
    }
}

export function userSignUpRequest(state = {}, action) {
    switch (action.type) {
        case userConstants.SIGNUP_REQUEST:
            return {
                user_signup_status:userConstants.SIGNUP_REQUEST,
                registering:true
                // user_signup_data: action,
            };
        case userConstants.SIGNUP_SUCCESS:
            return {
                user_signup_status:userConstants.SIGNUP_SUCCESS,
                // registration_step: 1
            };
        case userConstants.SIGNUP_FAILURE:
            return {
                user_signup_status: userConstants.SIGNUP_FAILURE,
            };
        
        default:
            return {
                ...state,
            };
    }
}

