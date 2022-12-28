import React from "react";
import FooterComponent from "../../@core/layouts/components/footer";
import './contactUs.scss';
import {Col, Label, Row} from "reactstrap";
import {Form, FormGroup, Input, Button} from "reactstrap";
import IntlTelInput from "react-intl-tel-input";
import * as Icon from "react-feather";
import Fade from "react-reveal/Fade";


class ContactUs extends React.Component {

    state = {
        country: 'lk',
        mobileNumber: '', mobileNumberEnter: '',
        isValidMob: false
    };
    newMobileNumberValidation = (number, condition) => {
        let result = condition;
        if (!result) {
            let reg = new RegExp("^(9474)[0-9]{7}$");
            result = reg.test(number)
        }
        return result;
    };

    mobileNumberInputValidation = (value, withdialcode, condition) => {
        let reg = new RegExp('^\\+[0-9]*$|^[0-9]*$');
        return {
            numberInputValidation: reg.test(value),
            mobileNumberValidation: this.newMobileNumberValidation(withdialcode.substr(1).replace(/\s/g, ""), condition)
        };
    }

    onPhoneNumberChange = async (condition, value, object, withdialcode) => {
        if (this.mobileNumberInputValidation(value, withdialcode, condition).numberInputValidation) {
            await this.setState({
                isValidMob: this.mobileNumberInputValidation(value, withdialcode, condition).mobileNumberValidation,
                mobileNumber: withdialcode,
                mobileNumberEnter: value
            });
        }
    };

    render() {
        let {mobileNumberEnter} = this.state;
        return (
            <div>
                <div>
                    <div className='contact-us-main-view'>
                        <div className="container">
                            <Row>
                                <Col className='contact-us-txt-area' sm={12} md={6} lg={6} xl={6}>
                                    <Fade top><h1>TOKELIZE</h1></Fade>
                                    <Fade top><h2>Let us know what you think</h2></Fade>
                                    <Fade top><p>Lorem ipsum dolor sit amet, consectetur <br/>
                                        adipiscing elit. </p></Fade>
                                </Col>

                                <Col className='contact-us-form' sm={12} md={6} lg={6} xl={6}>
                                    <Fade top>
                                        <Form className='contact-form'>
                                            <Row className='field-wrapper'>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>
                                                            First Name
                                                        </Label>
                                                        <Input
                                                            name="FirstName"
                                                            placeholder="First Name"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label>
                                                            Last Name
                                                        </Label>
                                                        <Input
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FormGroup className='field-wrapper'>
                                                <Label>
                                                    Email
                                                </Label>
                                                <Input
                                                    name="email"
                                                    placeholder="youremail@gmail.com"
                                                />
                                            </FormGroup>
                                            <FormGroup className='field-wrapper'>
                                                <Label>
                                                    Mobile Number
                                                </Label>
                                                <IntlTelInput
                                                    defaultCountry={this.state.country}
                                                    preferredCountries={['lk']}
                                                    inputClassName="form-control auth-input"
                                                    containerClassName="intl-tel-input w-100"
                                                    // placeholder={'Mobile Number'}
                                                    value={mobileNumberEnter}
                                                    name='mobileNumber' required={true} nationalMode={false}
                                                    onPhoneNumberChange={this.onPhoneNumberChange}
                                                    customPlaceholder={'XXXXXXXXXX'}
                                                />
                                            </FormGroup>

                                            <FormGroup className='field-wrapper'>
                                                <Label>
                                                    Your Message
                                                </Label>
                                                <Input
                                                    id="exampleText"
                                                    name="text"
                                                    type="textarea"
                                                />
                                            </FormGroup>


                                            <FormGroup className='field-wrapper-checkbox' check>
                                                <Input
                                                    id="checkbox2"
                                                    type="checkbox"
                                                />
                                                {' '}
                                                <Label check>
                                                    You agree to our friendly privacy policy.
                                                </Label>
                                            </FormGroup>

                                            <Button className='w-100 btn-contact-us'>
                                                Send Message
                                            </Button>
                                        </Form>
                                    </Fade>
                                    <Fade top>
                                        <div className='d-flex justify-content-between px-5 mt-3'>
                                            <Icon.Facebook className='social-media'/>
                                            <Icon.Youtube className='social-media'/>
                                            <Icon.Instagram className='social-media'/>
                                            <Icon.Linkedin className='social-media'/>
                                        </div>
                                    </Fade>
                                </Col>

                            </Row>
                        </div>
                    </div>
                    <FooterComponent/>
                </div>

            </div>
        );
    }
}

export default ContactUs;