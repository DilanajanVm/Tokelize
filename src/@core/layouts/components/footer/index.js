// ** Icons Import
import React from 'react'
import '../../../../assets/scss/footer.scss'
import {Icon} from "@iconify/react";
import * as constant from "../../../../router/RouteConstant";
import LogoEng from '../../../../assets/images/logo/tokelize-dark.png'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Col} from "reactstrap";
import {language} from "../../../../const/language";

class Footer extends React.Component {
    render() {
        let lan = this.props.languagePicker;
        return (
            <div
                className={this.props.notMargin !== undefined && this.props.notMargin ? "footerCustome w-100" : "footerCustome w-100 mt-0"}>
                <div className=' mt-1 container'>
                    <div className="row footerMainDetails mt-0 pb-0">
                        <div className="col-md-2 col-lg-2 text-center">
                            <img src={LogoEng
                            } className='footerLogo' alt="logo"/>
                        </div>
                        <div className="col-md-7 col-lg-8 navLink-list">
                            <div>
                                <a target={"_blank"} href={'/'}>
                                    {language[lan].PrivacyPolicy}
                                </a>
                                <a target={"_blank"} href={'/'}>
                                    {language[lan].TermsConditions}
                                </a>
                                {/*<a href="/">*/}
                                {/*    Cookie Policy*/}
                                {/*</a>*/}
                                <a href={'/'}>
                                    {language[lan].ContactUsTopic}
                                </a>
                            </div>

                        </div>

                    </div>


                </div>
                <div className="row mt-1 mb-1">
                    <div className="col-md-12 pt-0 pb-1 mt-0 mb-0">
                        <hr className="custom-hr pt-0 pb-0 mt-0 mb-0"/>
                    </div>

                    <div className="col-md-12 copyRightDetails pt-1 pb-1 mt-0">
                        <p>

                            <Col md={4} className='dialog-btn'> © Copyright 2022 <b> <a href="https://www.dialog.lk/"
                                                                                         target="_blank"
                                                                                         style={{color: '#111111'}}> </a> </b> </Col>
                            </p>
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = (props) => ({
    loading: props.loader.isLoading,
    languagePicker: props.language.language,
});

export default connect(mapStateToProps, null)(withRouter(Footer))

