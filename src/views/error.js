import React from "react";
import {Button, Col, Row} from 'reactstrap'
import {Link} from 'react-router-dom'
import errorImg from '../assets/images/pages/not-found-img.png'
import FooterComponent from "../@core/layouts/components/footer";
import '@styles/base/pages/page-misc.scss'
import './view-style/error.scss'
import * as constants from "../router/RouteConstant";

const Error = (props) => {

    const backToHomePage = () => {
        window.location.href = constants.HOME_PATH
    }

    return (
        <div className='error'>
            <div className="container">
                <Row>
                    <Col md={12} className='details-holder'>
                        <h1 className='topic'>Sorry, Page not found</h1>
                        <p className={'para-details'}>We’re sorry. The page you requested could not be found. Please go
                            back to the homepage!</p>
                        <img className={'img-holder'} src={errorImg} alt=""/>
                        <Button onClick={() => backToHomePage()} className={'btn-back-to-home'}>
                            Back to Homepage
                        </Button>
                    </Col>
                </Row>
            </div>

            <FooterComponent/>
        </div>
    )
}
export default Error
