// ** Icons Import
import React from 'react'
import '../../../../assets/scss/footer.scss'
import {Icon} from "@iconify/react";
import * as constant from "../../../../router/RouteConstant";
import LogoEng from '../../../../assets/images/logo/full logo white.png'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Col, FormGroup, Label, Row, Input, Button} from "reactstrap";
import {language} from "../../../../const/language";

class Footer extends React.Component {
    render() {
        let lan = this.props.languagePicker;
        return (
            <div className="footerCustom w-100 mt-0">
                <div className="container">
                    <Row>
                        <Col className='companyDetails-wrapper' sm={12} md={5} lg={5} xl={5}>
                            <img className='footerLogo' src={LogoEng} alt=""/>
                            <p className='footer-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                aliquam aliquid cum dicta
                                distinctio earum est fuga id ipsa, magni nulla possimus quod sint tenetur totam ullam ut
                                vitae voluptatibus?</p>
                        </Col>
                        <Col sm={12} md={2} lg={2} xl={2} className='linkGrp'>
                            <span>Quick Links</span>
                            <a href="/">Home</a>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                        </Col>

                        <Col sm={12} md={2} lg={2} xl={2} className='linkGrp'>
                            <span>Follow Us</span>
                            <a href="/">Linkedin</a>
                            <a href="/">Twitter</a>
                            <a href="/">Instagram</a>
                        </Col>

                        <Col sm={12} md={3} lg={3} xl={3} className='linkGrp'>
                            <span>Contact Us</span>
                            <a href="/">hello@tokelize.com</a>

                            <div className="communityJoin">
                                <FormGroup>
                                    <Label>
                                        Join with our community
                                    </Label>
                                    <div className='d-flex community-btn-grp'>
                                        <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                    />
                                        <Button>
                                            Submit
                                        </Button>
                                    </div>
                                </FormGroup>
                            </div>

                        </Col>


                    </Row>
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

