import React from "react"
import './view-style/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import FooterComponent from '../@core/layouts/components/footer';
import 'antd/dist/antd.css';
import './view-style/overWriteStyle.scss';
import bg_black from '../assets/images/background/bg-green-pattern.png'
import tokelize_light from '../assets/images/logo/tokelize-light.png'
import dialog_box from '../assets/images/background/dialog box -hero.svg'
import eternel_logo from '../assets/images/logo/Eternal Koalas logo.png'
import {Col, Row} from "reactstrap";
import BgPattern from '../component/bg-pattern/bgPattern'
import BgPatternBase from '../component/bg-pattern-base/bgPattern'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import enternelKolaBrandLogo from '../assets/images/logo/eternel_logo_brand.png'
import CustomSlider from "../component/Slider/CustomSlider";
import * as Icon from 'react-feather';
import * as RouteConstant from '../router/RouteConstant'

import gsap from "gsap-trial";
import {SplitText} from "gsap-trial/SplitText"
import {ScrollTrigger} from "gsap-trial/ScrollTrigger"

class Home extends React.Component {

    componentDidMount() {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        const childSplit = new SplitText(".para-about-txt", {
            type: "lines",
            linesClass: "split-child"
        });
        const childSplit1 = new SplitText(".smallDesc", {
            type: "lines",
            linesClass: "split-child"
        });
        const childSplit2 = new SplitText(".test-refi", {
            type: "lines",
            linesClass: "split-child"
        });

        gsap.from(childSplit.lines, {
            duration: 1.2,
            yPercent: 140,
            ease: "back.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.para-about-txt',
                screenX: 50
            }
        });


        gsap.from(childSplit1.lines, {
            duration: 1.2,
            yPercent: 140,
            ease: "back.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.smallDesc',
                screenX: 800
            }
        });

        gsap.from(childSplit2.lines, {
            duration: 1.2,
            yPercent: 140,
            ease: "back.out",
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.test-refi',
                pin: true,
                x: 50, // when the top of the trigger hits the top of the viewport
                end: "+=100", // end after scrolling 500px beyond the start
            }
        });
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
                                <h1 className='txt-mission'>
                                    <span className='special-text'> Our mission </span> &nbsp;
                                    is to make positive environmental
                                    change feasible through Web3</h1>
                            </Col>
                        </Row>


                        <Row className="vision-desc-holder">
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <div>
                                    <p className="vision">
                                        Tokelize is a for-profit environmental impact NFT startup <br/> incorporated
                                        with the
                                        purpose of utilizing the power of NFTs to make real-world positive change.
                                    </p>
                                </div>
                            </Col>
                        </Row>


                        <Row className="row glass-card-holder">
                            <Col sm={12} md={12} lg={5} xl={5}>
                                <div className="row glass-card">
                                    <Col xs={8} sm={8} md={8} lg={10} xl={10}>
                                        <p className={'eternel_desc'}>
                                            Explore Our 10K Unique NFT <br/>
                                            <b> Collection </b>
                                            <Icon.ChevronsRight color={'white'}/>
                                        </p>
                                    </Col>

                                    <Col className='mx-0 px-0 img-wrapper' xs={4} sm={4} md={4} lg={2} xl={2}>
                                        <img src={eternel_logo} className={'eternel_logo'} alt=""/>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </div>

                <div className="about_us">
                    <span className="leftSide-pattern">  <BgPattern className='rightSide-pattern' bgColor='#fff'
                                                                    width={'450px'} opacity={0.1}/> </span>
                    <span className="rightSide-pattern">     <BgPattern className='leftSide-pattern' bgColor='#fff'
                                                                        width={'450px'} opacity={0.1}/> </span>

                    <div className="container">
                        <div className="row">
                            <Col sm={12} md={12} lg={4} xl={4}>
                                <img className='about-logo' src={tokelize_light} alt=""/>
                            </Col>
                            <Col sm={0} md={0} lg={1} xl={1}> </Col>
                            <Col className="txt-content" sm={12} md={12} lg={7} xl={7}>
                                <h1 className='topic-txt'>TOKELIZE</h1>
                                <p className='para-about-txt'>Tokelize was founded in 2022 and incorporated in the city
                                    of Dubai in the United Arab
                                    Emirates. With the mission of creating NFT projects that have a significant positive
                                    impact on our environment and society, Tokelize started with its first NFT
                                    collection called Eternal Koalas.</p>


                                <a className='btn-nav-view' href={RouteConstant.ABOUT_US_PATH}>About
                                    Us <Icon.ChevronsRight color={'white'}/></a>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="latestProjects">
                    <div className="container">
                        <Row className='d-flex justify-content-center'>
                            <Col className='w-100 text-center' sm={12} md={8} lg={8}>
                                <h1 className='topic-txt'>Latest View</h1>
                                <p className='smallDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam assumenda
                                    consequatur ducimus excepturi laudantium, optio pariatur quas recusandae unde. Aut
                                    autem cupiditate in ipsum itaque nesciunt placeat sapiente similique velit.</p>
                            </Col>
                        </Row>

                    </div>
                    <div className="container position-relative">
                        <CustomSlider/>
                    </div>
                </div>


                <div className="reFiSection">
                   <span className="baseImage">
                       <BgPatternBase className='baseImage' bgColor='#fff'
                                      width={'1000px'} opacity={1}/>
                   </span>

                    <div class="marquee-w">
                        <div class="marquee">
                            <span>. What are ReFi NTF .&nbsp;</span>
                        </div>
                        <div class="marquee marquee2">
                            <span>. What are ReFi NTF .&nbsp;</span>
                        </div>
                    </div>
                    <span className="front-img">
                       <BgPattern className='baseImage zindex-up' bgColor='#fff'
                                  width={'1000px'} opacity={1}/>
                   </span>

                    <div className="container">
                        <Row>
                            <Col className='refi-desc border-side' sm={12} md={6} lg={6} xl={6}><p
                                className='pr-2 test-refi'>Lorem ipsum
                                dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. <br/><br/> Dolorum, fugit quibusdam.
                                Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi,
                                tenetur.</p>
                            </Col>

                            <Col className='refi-desc' sm={12} md={6} lg={6} xl={6}><p className='pl-2'>Lorem ipsum
                                dolor sit amet,
                                consectetur adipisicing
                                elit. Assumenda explicabo harum,
                                <br/>illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum.<br/><br/> Dolorum, fugit quibusdam.
                                Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis quos
                                tenetur
                                velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                commodi,
                                tenetur.</p>
                            </Col>
                        </Row>
                    </div>
                </div>


                <div className="aboutEternelCola">
                    <div className="container">
                        <Row>
                            <Col sm={12} md={4} lg={4}>
                                <img src={enternelKolaBrandLogo} className='enternelLogo' alt=""/>
                            </Col>
                            <Col className='customeBorder' sm={12} md={8} lg={8}>
                                <h1 className='eternelKola-topic'>Eternal <br/> Koalas</h1>
                                <p className='eternelKola-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Ad adipisci architecto
                                    autem cupiditate eos illo itaque laudantium, magni maiores minus nam nisi pariatur
                                    perspiciatis placeat quasi ratione, rem sunt voluptatem. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. <br/><br/>Aliquam atque est iusto molestiae
                                    praesentium qui rem
                                    veniam. Eum facilis nulla pariatur perspiciatis quas. Accusamus aut commodi delectus
                                    hic necessitatibus provident. illo itaque laudantium, magni maiores minus nam nisi
                                    pariatur
                                    perspiciatis placeat quasi ratione, rem sunt voluptatem. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Aliquam atque est iusto molestiae praesentium qui rem
                                    veniam. Eum facilis nulla pariatur perspiciatis quas. Accusamus aut commodi delectus
                                    hic necessitatibus provident.</p>

                                <div className="nav-btn-grp d-flex justify-content-end">
                                    <a className='btn-nav-view' href={RouteConstant.CONTACT_US_PATH}>
                                        Contact Us <Icon.ChevronsRight color={'white'}/>
                                    </a>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>

                <FooterComponent/>

            </div>
        )
    }

};


export default Home;
