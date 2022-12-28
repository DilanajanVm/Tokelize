import React from "react";
import './aboutUs.scss';
import bg_AboutUs from '../../assets/images/background/about-us-img.png'
import tokelized_logo from '../../assets/images/logo/full logo black.png'
import kolaView from '../../assets/images/pages/nftPack.png'
import tempLogo from '../../assets/images/logo/tempLogo.png'
import {Col, Row} from "reactstrap";
import * as Icon from "react-feather";
import Slider from "react-slick";
import FooterComponent from "../../@core/layouts/components/footer";
import Fade from "react-reveal/Fade";
import {Zoom} from "react-reveal";

class AboutUs extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return <div className='aboutUs-main'>
            <div className='aboutUs-hero'>
                <div className="bg-image">
                    <Fade right> <img src={bg_AboutUs} alt=""/> </Fade>
                </div>

                <div className="container">
                    <Row>
                        <Col sm={12} md={10} lg={10}>
                            <Fade left><h1 className='about_us_topic'>About Us</h1></Fade>
                        </Col>
                        <Col sm={12} md={7} lg={7} className='fullLogo-wrapper'>
                            <Fade left> <img src={tokelized_logo} className='fullLogo' alt=""/> </Fade>
                        </Col>
                    </Row>
                </div>
            </div>


            <div className="aboutus-contentArea">
                <Fade bottom>
                    <div className="bg-rotateName">
                        <h1 className='side-text left-text'>TOKELIZE</h1>
                        <h1 className='side-text right-text'>TOKELIZE</h1>
                    </div>
                </Fade>

                <div className="container textContent">
                    <Row className='d-flex justify-content-center'>
                        <Col className='textContent-wrapper' sm={10} md={8} lg={8}>
                            <Fade top>
                                <hr/>
                            </Fade>
                            <Fade top><h1>About Us</h1></Fade>
                            <Fade top><p>
                                Mission-driven communities empowered by blockchain technology have the potential to
                                address climate change, biodiversity loss and the underlying social structures that got
                                us here in the first place.
                                <br/>
                                <br/>
                                In the article below I will unpack this thesis and explain why the ReFi movement is the
                                most promising application of distributed ledger technology—also known as blockchain.


                            </p></Fade>
                        </Col>
                    </Row>
                    <img className='KolaImg' src={kolaView} alt=""/>
                </div>


                <div className="container missionView">
                    <Fade top>      <p>Mission-driven communities empowered by blockchain technology have the potential to address
                        climate change, biodiversity loss and the underlying social structures that got us here in the
                        first place.</p>
                    </Fade>
                        <Fade top>      <p>
                        In the article below I will unpack this thesis and explain why the ReFi movement is the most
                        promising application of distributed ledger technology—also known as blockchain.
                    </p></Fade>

                            <Fade top>    <hr class='hr-divider'/></Fade>

                                <Fade top>       <p className='contact-Us_para'>
                        Mission-driven communities empowered by blockchain technology have the potential to address
                        climate change, biodiversity loss and the underlying social structures that got us here in the
                        first
                    </p></Fade>
                    <div className='d-flex justify-content-center text-center'>
                        <Fade top>     <a className='nav-btn-bold btn-nav-view ' href="/">Contact Us <Icon.ChevronsRight
                            color={'white'}/></a></Fade>
                    </div>
                </div>
            </div>

            <div className=" sliderView">
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Slider {...settings}>
                            <div>
                                <img className='slider-logos' src={tempLogo} alt=""/>
                            </div>
                            <div>
                                <img className='slider-logos' src={tempLogo} alt=""/>
                            </div>
                            <div>
                                <img className='slider-logos' src={bg_AboutUs} alt=""/>
                            </div>
                            <div>
                                <img className='slider-logos' src={tempLogo} alt=""/>
                            </div>
                            <div>
                                <img className='slider-logos' src={tempLogo} alt=""/>
                            </div>
                            <div>
                                <img className='slider-logos' src={kolaView} alt=""/>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>
            <FooterComponent/>
        </div>
    }
}


export default AboutUs;