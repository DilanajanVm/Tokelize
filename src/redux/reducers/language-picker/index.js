import {LAN, LAN_ENGLISH} from "../../../router/RouteConstant";

let lan = localStorage.getItem(LAN);
// ** Initial State
const initialState = {
    language: lan ? lan : LAN_ENGLISH,
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'languagePicker':
            return {...state, language: action.value};
        default:
            return state
    }
}

export default languageReducer
