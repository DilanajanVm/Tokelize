import * as RouterConstant from '../router/RouteConstant'
import * as constant from '../router/RouteConstant'
import * as moment from "moment";
import {AlertTriangle, Check, X} from "react-feather";
import React, {Fragment} from "react";
import {Slide, toast} from "react-toastify";
import Avatar from '@components/avatar'



const ToastContent = ({title, body, assets}) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' className={assets.color} icon={assets.icon}/>
                <h6 className='toast-title fw-bolder custom-font-toast'>{title}</h6>
            </div>
        </div>
        {body && (
            <div className='toastify-body'>
                <span role='img' aria-label='toast-text'>{body}</span>
            </div>
        )}
    </Fragment>
)
export const dismissPreviousToastMsgHandler = () => {
    toast.dismiss();
}
export const notifyMessage = (msg, type, duration) => {
    dismissPreviousToastMsgHandler();
    let msgType = "info"
    let assets = {
        color: "bg-info",
        icon: <AlertTriangle size={15}/>
    }

    if (type === 2) {
        msgType = "info"
        assets = {
            color: "bg-info",
            icon: <AlertTriangle size={15}/>
        }
    } else if (type === 0) {
        msgType = "error"
        assets = {
            color: "bg-danger",
            icon: <X size={15}/>
        }
    } else if (type === 1) {
        msgType = "success"
        assets = {
            color: "bg-success",
            icon: <Check size={15}/>
        }
    }

    toast[msgType](
        <ToastContent title={msgType} body={msg} assets={assets}/>,
        {
            con: false,
            transition: Slide,
            hideProgressBar: false,
            autoClose: 30000,
            position: "top-center"
        }
    )

};


export const removeCookiesValues = async () => {
    localStorage.removeItem(RouterConstant.ACCESS_TOKEN);
    localStorage.removeItem(RouterConstant.REFRESH_TOKEN);
    localStorage.removeItem("User");
    localStorage.removeItem("user_profile_image");
};

/** style number format **/
export const numberWithCommas = (value, isWithOutDot) => {
    value = value ? isWithOutDot ? (Number(value).toFixed(0)) : (Number(value).toFixed(2)) : 0;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

export const getAuthUserDetails = () => {
    return JSON.parse(localStorage.getItem('User'));
}

export const logOut = () => {
    logoutUser().then(res=>{
        localStorage.clear();
        // return true;
    })

};


export const isEmpty = (str) => {
    return (!str || str.length === 0)
}

export const getNavBarLinked = () => {
    let currentPath = window.location.pathname;
    switch (currentPath) {
        case constant.HOME_PATH:
            return 0;
        default:
            return null;

    }
}

export const getExpireStatus = (endDate, currentStatus) => {
    if (new Date(moment().format('YYYY-MM-DD')) > new Date(moment(endDate).format('YYYY-MM-DD'))) {
        return 'EXPIRED';
    } else {
        return currentStatus;
    }
}

export const donateStatusHandler = (status) => {
    switch (status) {
        case 'EXPIRED':
        case 'COMPLETED':
        case 'REJECTED':
        case 'TERMINATED':
        case 'INACTIVE':
        case 'PENDING':
            return {viewOnly: true, labelVisible: true}
        case 'ACTIVE':
            return {viewOnly: false, labelVisible: false}
        default:
            return {viewOnly: false, labelVisible: true}
    }
}
