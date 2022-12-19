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

        let lan = localStorage.getItem(LAN);
        setLanguage(lan ? lan : LAN_ENGLISH);
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
                                    {languageType === LAN_ENGLISH ? 'Home' : languageType === LAN_TAMIL ? 'முதன்மை பக்கம் ' : 'මුල් පිටුව'}
                                </h3>
                            </Link>
                        </NavItem>
                    </ul>

                    <ul className='navbar-nav d-xl-none d-flex align-items-center' style={{marginTop: -5}}>
                        <NavItem onClick={() => {
                            routerCheck(1)
                        }} className='mobile-menu mr-auto'>
                            <Link to={'/'}
                                  className=' cus-nav-items nav-menu-main menu-toggle hidden-xs is-active'
                                  onClick={() => viewMenu(!menu)}>
                                <h3 style={activeNav === 1 ? {color: '#50286D'} : null}
                                    className="cus-nav-items">
                                    {languageType === LAN_SINHALA ? 'සමාජ සත්කාරක වැඩසටහන්' : languageType === LAN_TAMIL ? 'அறக்கட்டளை செயற்றிட்டங்கள்' : 'Charity Programmes'}
                                </h3>
                            </Link>
                        </NavItem>
                    </ul>

                    <ul className='mt-1 navbar-nav d-xl-none d-flex align-items-center'>
                        <NavItem className='mobile-menu mr-auto'>
                            <div
                                className='nav-menu-main menu-toggle hidden-xs is-active'
                                onClick={() => {
                                    viewSubMenu(!subMenu)
                                    setShowLanguages(false)
                                    setProfileSubMenu(false)
                                }}>
                                <h3 className="cus-nav-items"
                                    style={activeNav === 3 ? {color: '#50286D'} : null}>
                                    {languageType === LAN_ENGLISH ? ' More' : languageType === LAN_TAMIL ? 'மேலும்' : 'තවත්'}
                                    <Icon
                                        style={{marginLeft: '10px'}}
                                        icon="ant-design:caret-down-filled"
                                        height="15"
                                    />
                                </h3>
                            </div>
                            {subMenu ? <div className='more-details-list-show'>

                                <div className='topic-list'>
                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='profile-setting-btn'
                                        className='sub-navigation'>
                                        <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                              to={'/'}>
                                            {languageType === LAN_SINHALA ? 'අපි පිළිබඳව' : languageType === LAN_TAMIL ? 'எங்களை பற்றி' : 'About Us'}

                                        </Link>
                                    </li>
                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='contactUs-btn'
                                        className='sub-navigation'>
                                        <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                              to={'/'}>
                                            {languageType === LAN_SINHALA ? 'අප හා සම්බන්ධවන්න' : languageType === LAN_TAMIL ? 'தொடர்புகளுக்கு ' : 'Contact Us'}

                                        </Link></li>
                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='contactUs-btn'
                                        className='sub-navigation'>
                                        <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                              to={'/'}>
                                            {languageType === LAN_SINHALA ? 'නිතර ඇසෙන ප්‍රශ්න' : languageType === LAN_TAMIL ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'FAQ'}
                                        </Link></li>
                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='contactUs-btn'
                                        className='sub-navigation'>
                                        <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                              to={'/'}>
                                            {languageType === LAN_SINHALA ? 'එය ක්‍රියාත්මක වන ආකාරය' : languageType === LAN_TAMIL ? 'இது எவ்வாறு செயல்படுகிறது' : 'How it works'}
                                        </Link></li>

                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='contactUs-btn'
                                        className='sub-navigation'>
                                        <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                              to={'/'}>
                                            {languageType === LAN_SINHALA ? 'ප්‍රවර්ග' : languageType === LAN_TAMIL ? 'Categories-t' : 'Categories'}
                                        </Link></li>

                                    <li onClick={() => {
                                        viewSubMenu(!subMenu)
                                        routerCheck(3)
                                    }} key='FandQ-btn'
                                        className='sub-navigation'>
                                        <div onClick={() => {
                                            viewMenu(!menu)
                                            props.spinnerHandler(true);
                                        }} style={{color: 'black'}}>
                                            {languageType === LAN_ENGLISH ? 'For Charities' : languageType === LAN_TAMIL ? 'தொண்டு நிறுவனங்களுக்கு' : 'සමාජ සත්කාර සඳහා'}
                                        </div>
                                    </li>
                                </div>
                            </div> : null}
                        </NavItem>
                    </ul>

                    <ul className='mt-1 navbar-nav d-xl-none d-flex align-items-center'>
                        <NavItem className='mobile-menu mr-auto'>
                            <div
                                onClick={() => {
                                    setShowLanguages(!showLanguages)
                                    viewSubMenu(false)
                                    setProfileSubMenu(false)
                                }}
                                style={{listStyle: 'none'}}
                                className='nav-menu-main menu-toggle hidden-xs is-active'>
                                <h3 className="cus-nav-items"
                                    style={activeNav === 8 ? {color: '#50286D'} : null}>
                                    {languageType === LAN_ENGLISH ? 'English' : languageType === LAN_TAMIL ? 'தமிழ்' : 'සිංහල'}
                                    <Icon
                                        style={{marginLeft: '10px'}}
                                        icon="ant-design:caret-down-filled"
                                        height="15"
                                    />
                                </h3>
                            </div>
                            {showLanguages &&
                            <div className='more-details-list-show'>

                                <div className='topic-list'>
                                    <li key='profile-setting-btn' className='sub-navigation cursor-pointer'>
                                        <div style={{color: 'black'}} onClick={() => {
                                            setShowLanguages(!showLanguages)
                                            selectLanguage(LAN_ENGLISH)
                                        }}>
                                            English
                                        </div>
                                    </li>
                                </div>

                                <div className='topic-list'>
                                    <li key='profile-setting-btn' className='sub-navigation cursor-pointer'>
                                        <div style={{color: 'black'}} onClick={() => {
                                            setShowLanguages(!showLanguages)
                                            selectLanguage(LAN_SINHALA)
                                        }}>
                                            සිංහල
                                        </div>
                                    </li>
                                </div>

                                <div className='topic-list'>
                                    <li key='profile-setting-btn' className='sub-navigation cursor-pointer'>
                                        <div style={{color: 'black'}} onClick={() => {
                                            selectLanguage(LAN_TAMIL)
                                            setShowLanguages(!showLanguages)
                                        }}>
                                            தமிழ்
                                        </div>
                                    </li>
                                </div>
                            </div>}
                        </NavItem>
                    </ul>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '10px',
                        justifyContent: user ? "start" : "space-around"
                    }}>

                        {user === undefined || user === null ?
                            <ul className='navbar-nav d-xl-none d-flex align-items-center'>
                                <NavItem className='navElements'
                                         style={{
                                             marginLeft: '30px',
                                             marginTop: '0px'
                                         }}>
                                    <Link to={'/'} className='navbar-brand'>
                                        <Button color='#50286D' style={{backgroundColor: '#50286D', color: 'white'}}
                                                className=' navigationElement justify-content-center'>
                                            {languageType === LAN_SINHALA ? 'ඇතුළත් වන්න' : languageType === LAN_TAMIL ? 'Login-t' : 'Login'}
                                        </Button> </Link>
                                </NavItem>
                            </ul> : null}

                        {user &&

                        <NavItem className='navElements userSettingBar w-100'
                                 style={{marginLeft: '30px', marginTop: '10px', listStyle: 'none'}}
                                 onClick={() => {
                                     routerCheck(4)
                                 }}>
                            <div className='navbar-brand w-100'>
                                <div className='profile-Icon'>
                                    <div style={{color: 'black'}}
                                         className="cus-nav-items nav-menu-main menu-toggle hidden-xs is-active"
                                    >
                                        <div
                                            className="cus-nav-items pl-0"
                                            style={{marginLeft: -5}}
                                        >
                                            {user_profile_image === '' ?
                                                <Icon icon="carbon:user-avatar-filled-alt" color="#50286D"
                                                      height="42"
                                                      onClick={() => {
                                                          setProfileSubMenu(!profileSubMenu)
                                                          setShowLanguages(false)
                                                          viewSubMenu(false)
                                                      }}
                                                /> :
                                                <img style={{
                                                    borderRadius: '50%',
                                                    width: '42px',
                                                    height: '42px',
                                                    objectFit: 'cover',
                                                    border: '2px solid rgba(54, 54, 54, 0.2)',

                                                }} src={user_profile_image} alt=""
                                                     onClick={() => {
                                                         setProfileSubMenu(!profileSubMenu)
                                                         setShowLanguages(false)
                                                         viewSubMenu(false)
                                                     }}
                                                />

                                            }
                                            <Icon
                                                style={{marginLeft: '10px'}}
                                                icon="ant-design:caret-down-filled"
                                                height="15"
                                                onClick={async () => {
                                                    await setProfileSubMenu(!profileSubMenu)
                                                    setShowLanguages(false)
                                                    viewSubMenu(false)
                                                }}
                                            />
                                        </div>

                                    </div>

                                    {profileSubMenu && (
                                        <div className='more-details-list-show w-100'>
                                            <span className="mobile-user-name pt-3">{userName}</span>
                                            <div className="border-bottom-gray w-100"/>
                                            <div className='topic-list'>
                                                <li onClick={() => setProfileSubMenu(!profileSubMenu)}
                                                    key='profile-setting-btn'
                                                    className='sub-navigation'>
                                                    <Link onClick={() => viewMenu(!menu)} style={{color: 'black'}}
                                                          to={'/'}>
                                                        <img src={profileIcon} width={24} height={24} alt="profile"
                                                             className="mr-1"/>
                                                        {languageType === LAN_SINHALA ? 'ආකෘතිය  කළමනාකරණය' : languageType === LAN_TAMIL ? 'சுயவிவர மேலாண்மை' : 'My Profile'}

                                                    </Link>
                                                </li>
                                                <li onClick={() => setProfileSubMenu(!profileSubMenu)}
                                                    key='contactUs-btn'
                                                    className='sub-navigation'>
                                                    <div onClick={() => {
                                                        props.spinnerHandler(true);
                                                    }} style={{color: 'black'}}>
                                                        <img src={recommandationIcon} width={24} height={24} alt="recom"
                                                             className="mr-1"/>
                                                        {languageType === LAN_SINHALA ? 'මගේ නිර්දේශයන්' : languageType === LAN_TAMIL ? 'My Recommendations-t' : 'My Recommendations'}

                                                    </div></li>

                                                <li onClick={() => setProfileSubMenu(!profileSubMenu)} key='FandQ-btn'
                                                    className='sub-navigation'>
                                                    <div onClick={async () => {
                                                        setProfileSubMenu(!profileSubMenu)
                                                        await logOut(languageType)
                                                    }} style={{color: 'black'}}>
                                                        <img src={exitIcon} width={24} height={24} alt="exit"
                                                             className="mr-1"/>
                                                        {languageType === LAN_SINHALA ? 'ඉවත්වීම' : languageType === LAN_TAMIL ? 'Logout-t' : 'Logout'}
                                                    </div></li>
                                            </div>
                                        </div>
                                    )}

                                </div></div>

                        </NavItem>}
                        {/*{user && <ul className='navbar-nav d-xl-none d-flex align-items-center'>*/}
                        {/*    <NavItem className='navElements'*/}
                        {/*             style={{*/}
                        {/*                 marginLeft: '30px',*/}
                        {/*                 marginTop: '10px'*/}
                        {/*             }}>*/}
                        {/*        <a href={constant.CHARITY_HOME + '&program-create=true'} className='navbar-brand'>*/}
                        {/*            <Button color='#ffffff' style={{border: '#50286D solid 2px', color: '#50286D'}}*/}
                        {/*                    className='btn-forOrganizationNavBar navigationElement justify-content-center'>*/}
                        {/*                Recommendations*/}
                        {/*            </Button> </a>*/}
                        {/*    </NavItem>*/}
                        {/*</ul>}*/}

                        {user === null || user === undefined ?
                            <ul className='navbar-nav d-xl-none d-flex align-items-center'>
                                <NavItem className='navElements'
                                         style={{
                                             marginLeft: '8px',
                                             marginTop: '0px'
                                         }}>
                                    <a href={'/'} className='navbar-brand'>
                                        <Button color='#ffffff' style={{border: '#50286D solid 2px', color: '#50286D'}}
                                                className='btn-forOrganizationNavBar navigationElement justify-content-center'>
                                            {languageType === LAN_ENGLISH ? 'For Charities' : languageType === LAN_TAMIL ? 'தொண்டு நிறுவனங்களுக்கு' : 'සමාජ සත්කාර සඳහා'}
                                        </Button> </a>
                                </NavItem>
                            </ul>
                            : null}
                    </div>

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

