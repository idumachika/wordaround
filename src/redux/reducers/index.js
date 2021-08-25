import { combineReducers } from "redux";
import { authentication, UserSignUpReducer } from "./authentication.reducer";
import { userConstants, } from "../constants/user.constant";
import { onboarding } from './export'
import { alert } from './alert.reducer';



const rootReducer = (state, action) => {
    //console.log(action);
    if (action.type === userConstants.LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action)

};


const appReducer = combineReducers({
    authentication,
    onboarding_user_details: onboarding.userSignUpRequest,
    alert

})


export default rootReducer;
