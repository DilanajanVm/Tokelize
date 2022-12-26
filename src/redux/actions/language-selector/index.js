// ** Handle Language
import {LAN} from "../../../router/RouteConstant";

export const handleLanguagePicker = (value) => {
    localStorage.setItem(LAN, value);
    return dispatch => {
        dispatch({type: 'languagePicker', value})
    }
};
