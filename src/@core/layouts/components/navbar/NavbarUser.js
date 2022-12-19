// ** Dropdowns Imports
import React, {Fragment, useEffect, useState} from 'react'
import '../../../../views/view-style/navBarMobile.scss'
import {Sun, Moon, Menu} from 'react-feather'
import {Button, NavItem, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import * as constant from '../../../../router/RouteConstant'
import {Icon} from "@iconify/react";
import { getNavBarLinked, isEmpty} from "../../../../utility/commonFun";
import {handleLoader} from "../../../../redux/actions/spriner";
import {handleRefreshNavBar} from "../../../../redux/actions/navbar";
import {connect} from "react-redux";
import {LAN_SINHALA} from "../../../../router/RouteConstant";
import {LAN_TAMIL} from "../../../../router/RouteConstant";
import {handleLanguagePicker} from "../../../../redux/actions/language-selector";
import '../../style//navBarStyle.scss'
import {StorageStrings} from "../../../../const/commonConst";
import {LAN} from "../../../../router/RouteConstant";
const NavbarUser = props => {
    // ** Props
    const {skin, setSkin, setMenuVisibility} = props;
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [user, setUser] = useState(0);
    const [activeNav, setActiveNav] = useState(0)
    const [navbarScrolled, setNavbarScrolled] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [user_profile_image, setProfileImage] = useState('');
    const [profileSubMenu, setProfileSubMenu] = useState(false);
    const [userName, setUserName] = useState('');
    const [showLanguages, setShowLanguages] = useState(false);
    const [languageType, setLanguage] = useState('');

    const ThemeToggler = () => {
        if (skin === 'dark') {
            return <Sun className='ficon' onClick={() => setSkin('light')}/>
        } else {
            return <Moon className='ficon' onClick={() => setSkin('dark')}/>
        }
    };

    const viewMenu = (e) => {
        setMenu(e)
    };
    const viewSubMenu = (e) => {
        setSubMenu(e)
    };
    let styleMenu = {
        position: 'absolute',
        top: '5rem',
        left: 0
    }
    let hideMenu = {
        position: 'absolute',
        top: '3.5rem',
        left: 0,
        width: '100%'
    };

    const routerCheck = (e) => {
        setActiveNav(e)
    };

    const cleanup = () => {
        setIsMounted(false)
        setNavbarScrolled(false)
    };

    useEffect(() => {

        let user_profile_image = localStorage.getItem('user_profile_image');

        if (!isEmpty(user_profile_image) && user_profile_image !== 'null') {
            setProfileImage(user_profile_image);
        } else {
            setProfileImage('');
        }

        setActiveNav(getNavBarLinked());

        setIsMounted(true)
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 65 && navbarScrolled === false) {
                setNavbarScrolled(true)
            }
            if (window.pageYOffset < 65) {
                setNavbarScrolled(false)
            }
        })
        props.RefreshNavBard(false)
        let userName = localStorage.getItem(StorageStrings.USER_NAME)
        if (userName) {
            setUserName(userName);
        }
        return () => cleanup()
    }, [props.RefreshNavBardGet])




    const selectLanguage = (lan) => {
        props.languagePicker(lan);
        setLanguage(lan);
        props.spinnerHandler(false);
    };

    return (
        <Fragment>
            <ul style={{backgroundColor: 'transparent !important'}}
                className='navbar-nav d-xl-none d-flex align-items-center'>
                <NavItem className='mobile-menu mr-auto'>
                    <div className='nav-menu-main menu-toggle hidden-xs is-active'
                         onClick={() => viewMenu(!menu)}>
                        <Menu
                            style={{
                                color: 'white',
                                backgroundColor: ` rgba(0,0,0,0.5)`,
                                height: '50px',
                                width: '50px',
                                borderRadius: '10%',
                                padding: '10px'
                            }}

                            className='ficon'/>
                    </div>
                </NavItem>
            </ul>
            <div className="navMobile">
                <div style={menu ? styleMenu : hideMenu}
                     className={`${menu === true ? 'viewMenuMobile' : 'hideMenuMobile'}`}>
                    <ul className='navbar-nav d-xl-none d-flex align-items-center'>
                        <NavItem onClick={() => {
                            routerCheck(0)
                        }} className='mobile-menu mr-auto'>
                            <Link to={constant.HOME_PATH}
                                  className='cus-nav-items nav-menu-main menu-toggle hidden-xs is-active'
                                  onClick={() => viewMenu(!menu)}>
                                <h3
                                    className="cus-nav-items"
                                    style={activeNav === 0 ? {color: '#50286D'} : null}>
                                  Home
                                </h3>
                            </Link>
                        </NavItem>
                    </ul>



                </div>
            </div>
            <ul className='nav navbar-nav align-items-center ml-auto'>
                {/*<UserDropdown />*/}
            </ul>
        </Fragment>
    )
}
const mapDispatchToProps = (dispatch) => ({
    RefreshNavBard: data => dispatch(handleRefreshNavBar(data)),
    spinnerHandler: data => dispatch(handleLoader(data)),
    languagePicker: data => dispatch(handleLanguagePicker(data))
});

const mapStateToProps = (props) => ({
    RefreshNavBardGet: props.navbar.isLog,
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarUser);

