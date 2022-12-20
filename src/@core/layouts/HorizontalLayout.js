// ** React Imports
import React, {useState, useEffect, useReducer} from 'react'
import {Link} from 'react-router-dom'

// ** Store & Actions
import {useSelector, useDispatch} from 'react-redux'
import {handleMenuHidden, handleContentWidth} from '@store/actions/layout'

// ** Third Party Components
import classnames from 'classnames'
import {ArrowUp} from 'react-feather'
import ScrollToTop from 'react-scroll-up'
import {Navbar, NavItem, Button} from 'reactstrap'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Custom Components
import Customizer from '@components/customizer'
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import MenuComponent from './components/menu/horizontal-menu'

// ** Custom Hooks
import {useRTL} from '@hooks/useRTL'
import {useSkin} from '@hooks/useSkin'
import {useNavbarType} from '@hooks/useNavbarType'
import {useFooterType} from '@hooks/useFooterType'
import {useNavbarColor} from '@hooks/useNavbarColor'
import * as constant from '../../router/RouteConstant'
import {Icon} from '@iconify/react';
import './style/navBarStyle.scss'
// ** Styles
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'
import useForceUpdate from 'use-force-update';
import '../../views/view-style/overWriteStyle.scss';
import {connect} from "react-redux";
import {handleRefreshNavBar} from "../../redux/actions/navbar";
import {handleLoader} from "../../redux/actions/spriner";
import {handleLanguagePicker} from "../../redux/actions/language-selector";
import {getNavBarLinked, isEmpty} from "../../utility/commonFun";

import {Row, Col} from "reactstrap";

import {LAN_ENGLISH, LAN_SINHALA, LAN_TAMIL} from '../../router/RouteConstant.js'
import LogoEng from '../../assets/images/logo/tokelize-dark.png'
import {StorageStrings} from "../../const/commonConst";
import {LAN} from "../../router/RouteConstant";

const HorizontalLayout = (props) => {
    let lan = props.languagePicker;
    // ** Props
    const {children, navbar, footer, menu, currentActiveItem, routerProps} = props;

    // ** Hooks;
    const [skin, setSkin] = useSkin();
    const [isRtl, setIsRtl] = useRTL();
    const [user, setUser] = useState(0);
    const [user_profile_image, setProfileImage] = useState('');
    const [profileBarView, setProfileBarView] = useState(false);
    const [navbarType, setNavbarType] = useNavbarType();
    const [footerType, setFooterType] = useFooterType();
    const [languageType, setLanguage] = useState('');
    const [navbarColor, setNavbarColor] = useNavbarColor();
    const forceUpdate = useForceUpdate();
    // ** States
    const [isMounted, setIsMounted] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [userName, setUserName] = useState('')

    // ** Store Vars
    const dispatch = useDispatch();
    const layoutStore = useSelector(state => state.layout);

    // ** Vars
    const contentWidth = layoutStore.contentWidth;
    const isHidden = layoutStore.menuHidden;

    // ** Handles Content Width
    const setContentWidth = val => dispatch(handleContentWidth(val));

    // ** Handles Content Width
    const setIsHidden = val => dispatch(handleMenuHidden(val));

    // ** UseEffect Cleanup
    const cleanup = () => {
        setIsMounted(false);
        setNavbarScrolled(false)
    };
    const routerCheck = (e) => {
            setActiveNav(e)
    };

    //** ComponentDidMount
    useEffect(() => {
        let userAccess = localStorage.getItem(constant.ACCESS_TOKEN);
        let user_profile_image = localStorage.getItem('user_profile_image');
        let lan = localStorage.getItem(LAN);
        setUser(userAccess);
        setLanguage(lan ? lan : LAN_ENGLISH);
        if (!isEmpty(user_profile_image) && user_profile_image !== 'null') {
            setProfileImage(user_profile_image);
        } else {
            setProfileImage('')
        }

        setActiveNav(getNavBarLinked());

        setIsMounted(true);
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
    }, [props.RefreshNavBardGet]);

    // ** Vars
    const footerClasses = {
        static: 'footer-static',
        sticky: 'footer-fixed',
        hidden: 'footer-hidden'
    }

    const navbarWrapperClasses = {
        floating: 'navbar-floating',
        sticky: 'navbar-sticky',
        static: 'navbar-static'
    }

    const navbarClasses = {
        floating: 'floating-nav',
        sticky: 'fixed-top'
    }

    const bgColorCondition = navbarColor !== '' && navbarColor !== 'light' && navbarColor !== 'white'

    if (!isMounted) {
        return null
    }
    const routerCharity = () => {
        props.spinnerHandler(true);
    };
    const routerCategories = () => {
        props.spinnerHandler(true);
    };


    const selectLanguage = (lan) => {
        props.spinnerHandler(true);
        props.languagePicker(lan);
        localStorage.setItem('lan', lan);
        setLanguage(lan);
        props.spinnerHandler(false);
    };


    const getProfileImage = (imageSize) => {
        return (
            user_profile_image === '' ?
                <Icon icon="carbon:user-avatar-filled-alt" color="#50286D"
                      height={imageSize}/>
                :
                <img style={{
                    borderRadius: 1000,
                    objectFit: 'cover',
                    border: '2px solid rgba(54, 54, 54, 0.2)'
                }}
                     width={imageSize}
                     height={imageSize}
                     src={user_profile_image} alt=""/>

        )
    }

    return (
        <div
            className={classnames(
                `wrapper horizontal-layout horizontal-menu ${navbarWrapperClasses[navbarType] || 'navbar-floating'} ${
                    footerClasses[footerType] || 'footer-static'
                } menu-expanded`
            )}
            {...(isHidden ? {'data-col': '1-column'} : {})}
        >
            <Navbar
                expand='lg'
                className={classnames('header-navbar navBarCusStyle navbar-fixed align-items-center navbar-shadow navbar-brand-center', {
                    'navbar-scrolled': navbarScrolled
                })}
            >
                <div className="navbar-collapse d-flex justify-content-between align-items-center pl-5 pr-5"
                     style={{display: 'flex', flexDirection: 'row', width: '100%'}}>

                    <div style={{lineStyleType: 'none'}}>
                        <Link to={'/'} className='navbar-brand'>
                            <div style={{display: 'flex', flexDirection: 'row'}}
                                 onClick={() => props.RefreshNavBard(true)}>
                  <span>
                    <img className='brand-logoDetails' width='150px' style={{margin: '20px 10px 10px 30px'}}
                         src={LogoEng}
                         alt='logo'/>
                  </span>
                            </div>
                        </Link>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}
                         className='navbar-container nav navbar-nav align-items-center'>
                        <NavItem className={`navElements`}
                                 style={{paddingRight: '20px', marginTop: '0px'}}
                                 onClick={() => {
                                     routerCheck(0)
                                 }}>
                            <Link to={'/'} className={`navbar-brand  ${languageType}-navElement`}>
                                <h4
                                    className={` mr-1 nav-btn navigationElement  ${activeNav === 0 ? `nav-active-btn ` : ` nav-deactivate-btn`}`}
                                >
                                    Home
                                </h4>
                            </Link>
                        </NavItem>

                        <NavItem className='navElements' style={{padding: '0 150px', marginTop: '0px'}}>
                            <Link to={constant.ABOUT_US_PATH} className={`navbar-brand `} data-replace="like This"
                                  onClick={() => {
                                      routerCheck(1)
                                  }}>
                                <h4 className={` mr-1 nav-btn navigationElement  ${activeNav === 1 ? `nav-active-btn ` : ` nav-deactivate-btn`}`}>
                                    About Us
                                </h4>
                            </Link>
                        </NavItem>

                        <NavItem className='navElements' style={{paddingRight: '20px', marginTop: '0px'}}>
                            <Link to={'/'} className={`navbar-brand `} data-replace="like This"
                                  onClick={() => {
                                      routerCheck(2)
                                  }}>
                                <h4 className={` mr-1 nav-btn navigationElement  ${activeNav === 2 ? `nav-active-btn ` : ` nav-deactivate-btn`}`}>
                                    Contact Us
                                </h4>
                            </Link>
                        </NavItem>


                    </div>
                </div>

            </Navbar>

            {!isHidden ? (
                <div className='horizontal-menu-wrapper' style={{backgroundColor: "transparent"}}>
                    <Navbar
                        tag='div'
                        expand='sm'
                        style={{backgroundColor: 'transparent'}}

                        className={classnames(`header-navbar mobileNavBar navbar-horizontal navbar-shadow menu-border`, {
                            [navbarClasses[navbarType]]: navbarType !== 'static',
                            'floating-nav': (!navbarClasses[navbarType] && navbarType !== 'static') || navbarType === 'floating'
                        })}
                    >
                        {/*{menu ? menu : <MenuComponent routerProps={routerProps} currentActiveItem={currentActiveItem}/>}*/}
                    </Navbar>
                </div>
            ) : null}

            {children}
            {themeConfig.layout.customizer === true ? (
                <Customizer
                    skin={skin}
                    setSkin={setSkin}
                    footerType={footerType}
                    setFooterType={setFooterType}
                    navbarType={navbarType}
                    setNavbarType={setNavbarType}
                    navbarColor={navbarColor}
                    setNavbarColor={setNavbarColor}
                    isRtl={isRtl}
                    setIsRtl={setIsRtl}
                    layout={props.layout}
                    setLayout={props.setLayout}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                    contentWidth={contentWidth}
                    setContentWidth={setContentWidth}
                    transition={props.transition}
                    setTransition={props.setTransition}
                    themeConfig={themeConfig}
                />
            ) : null}

            {/*<footer style={{background: '#F2F2F2'}}*/}
            {/*        className={classnames(`footer footer-light ${footerClasses[footerType] || 'footer-static'}`, {*/}
            {/*            'd-none': footerType === 'hidden'*/}
            {/*        })}*/}
            {/*>*/}
            {/*    {footer ? footer : <FooterComponent footerType={footerType} footerClasses={footerClasses}/>}*/}
            {/*</footer>*/}

            {themeConfig.layout.scrollTop === true ? (
                <div className='scroll-to-top'>
                    <ScrollToTop showUnder={300} style={{bottom: '5%'}}>
                        <Button className='btn-icon' color='primary'>
                            <ArrowUp size={14}/>
                        </Button>
                    </ScrollToTop>
                </div>
            ) : null}
        </div>
    )
};


const mapDispatchToProps = (dispatch) => ({
    RefreshNavBard: data => dispatch(handleRefreshNavBar(data)),
    spinnerHandler: data => dispatch(handleLoader(data)),
    languagePicker: data => dispatch(handleLanguagePicker(data))
});
const mapStateToProps = (props) => ({
    RefreshNavBardGet: props.navbar.isLog,
    languagePicker: props.language.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLayout);



