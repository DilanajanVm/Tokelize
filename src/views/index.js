import React from "react"
import './view-style/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import FooterComponent from '../@core/layouts/components/footer';
import 'antd/dist/antd.css';
import './view-style/overWriteStyle.scss';
import {handleCharityFilter} from "../redux/actions/charity-filter";
import {handleLoader} from "../redux/actions/spriner";
import {connect} from "react-redux";
import {handleRefreshNavBar} from "../redux/actions/navbar";
import bg_black from '../assets/images/background/bg-black-pattern.png'
import dialog_box from '../assets/images/background/dialog box -hero.svg'
import eternel_logo from '../assets/images/logo/Eternal Koalas logo.png'
import {Col, Row} from "reactstrap";


class Home extends React.Component {

    async componentDidMount() {
        this.props.spinnerHandler(false);
    }

    render() {
        return (
            <div>
                <div className='home'>
                    <div className="bg-img">
                        <img src={bg_black} alt=""/>
                    </div>
                    <div className="container details-area">
                        <Row>
                            <Col sm={12} md={12} lg={10} xl={10}>
                                <img className='dialog-box-view' src={dialog_box} alt=""/>

                                <h1 class='txt-mission'><span className='special-text'> Our mission </span> &nbsp;is to
                                    make positive environmental
                                    change feasible through Web3</h1>
                            </Col>
                        </Row>


                        <Row className="vision-desc-holder">
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <div>
                                    <span className="vision">
                                        Tokelize is a for-profit environmental impact NFT startup <br/> incorporated
                                        with the
                                        purpose of utilizing the power of NFTs to make real-world positive change.
                                    </span>
                                </div>
                            </Col>
                        </Row>


                        <Row className="row glass-card-holder">
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <div className="row glass-card">
                                    <Col className='mx-0 px-0' sm={12} md={12} lg={2} xl={2}>
                                        <img src={eternel_logo} className={'eternel_logo'} alt=""/>
                                    </Col>
                                    <Col sm={12} md={12} lg={10} xl={10}>
                                        <p className={'eternel_desc'} >
                                            Lorem Ipsum is simply dummy text of Lorem Ipsum iLorem Ipsum is simply dummy text of Lorem Ipsum is simply!Ipsum is simply dummy text of Lorem Ipsum is simply!
                                        </p>

                                        <a className={'btn_eternel_contact_us'}  href="/"> Contact Us ></a>
                                    </Col>

                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>


                <FooterComponent/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    spinnerHandler: data => dispatch(handleLoader(data)),
    RefreshNavBard: data => dispatch(handleRefreshNavBar(data))
});

const mapStateToProps = (props) => ({
    languagePicker: props.language.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
