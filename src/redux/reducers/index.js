import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { userConstants } from "../constants/user.constant";


const rootReducer = (state, action) => {
    //console.log(action);
    if (action.type === userConstants.LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action)

};


const appReducer = combineReducers({
    authentication
})


export default rootReducer;
