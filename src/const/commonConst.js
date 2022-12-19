import {getAuthUserDetails} from "../utility/commonFun";

/** common filtering object**/
const userAcc = getAuthUserDetails()
export const DEFAULT_SEARCH_PARAMS = {
    keyword: null,
    sub_category_id: null,
    charity_id: null,
    program_type: 'ALL',
    category_id: null,
    to_date: null,
    from_date: null,
    latitude: null,
    longitude: null,
    radius: null,
    district: null,
    city: null,
    is_monetary: null,
    registered_donor_id: userAcc === null ? null : userAcc.userDetails.id,
    filter_type: null,
    status: 'ALL',
    sort_by: 'LATEST_FIRST',
}

/** Platform Payment Types **/
export const DEBIT_CARDS = 'DEBIT_CARDS';
export const CREDIT_CARDS = 'CREDIT_CARDS';
export const PHONE_CREDITS = 'PHONE_CREDITS';
export const EZCASH = 'EZCASH';
export const PAYMENT_SLIP = 'PAYMENT_SLIP';
export const GENIE = 'GENIE';
export const ADD_TO_BILL = 'ADD_TO_BILL';
export const TEXT_TO_DONATE = 'TEXT_TO_DONATE';
export const STAR_POINTS = 'STAR_POINTS';


/**Platform Messages**/
export const NO_COMMISSION_DISCLAIMER = 'The full donation made will be sent towards the cause and no commission percentage will be applied.'
export const NOTE_FOR_DONATIONS = 'Only applicable for Dialog account holders.'

/** accepted file types **/
export const PAYMENT_SLIP_ACCEPT_TYPES = "image/png, image/jpeg, image/jpg, application/pdf"
export const PROFILE_IMAGE_ACCEPT_TYPES = "image/png, image/jpeg, image/jpg"

export const StorageStrings = {
    USER_NAME: 'USER_NAME'
}
