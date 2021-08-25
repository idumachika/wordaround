import { alertConstants } from '../constants/alert.constant';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'text-xs italic text-red-500',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}