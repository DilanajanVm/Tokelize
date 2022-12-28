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
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Home extends React.Component {

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
                                <Fade bottom><h1 className='txt-mission'>

                                    <span className='special-text'> Our mission </span> &nbsp;  is to make positive
                                    environmental
                                    change feasible through Web3

                                </h1>
                                </Fade>
                            </Col>

                        </Row>


                        <Row className="vision-desc-holder">
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <div>
                                    <Fade bottom>
                                        <p className="vision">

                                            Tokelize is a for-profit environmental impact NFT startup <br/> incorporated
                                            with the
                                            purpose of utilizing the power of NFTs to make real-world positive change.

                                        </p>
                                    </Fade>
                                </div>
                            </Col>
                        </Row>


                        <Fade bottom>
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

                        </Fade>
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
                                <Zoom> <img className='about-logo' src={tokelize_light} alt=""/> </Zoom>
                            </Col>
                            <Col sm={0} md={0} lg={1} xl={1}> </Col>
                            <Col className="txt-content" sm={12} md={12} lg={7} xl={7}>
                                <Fade top><h1 className='topic-txt'>TOKELIZE</h1></Fade>
                                <Fade top><p className='para-about-txt'>Tokelize was founded in 2022 and incorporated in
                                    the city
                                    of Dubai in the United Arab
                                    Emirates. With the mission of creating NFT projects that have a significant positive
                                    impact on our environment and society, Tokelize started with its first NFT
                                    collection called Eternal Koalas.</p>
                                </Fade>

                                <Fade top> <a className='btn-nav-view' onClick={() => {
                                    localStorage.setItem('location', 1)
                                }} href={RouteConstant.ABOUT_US_PATH}>About
                                    Us <Icon.ChevronsRight color={'white'}/></a> </Fade>
                            </Col>
                        </div>
                    </div>
                </div>

                <div className="latestProjects">
                    <div className="container">
                        <Row className='d-flex justify-content-center'>
                            <Col className='w-100 text-center' sm={12} md={8} lg={8}>
                                <h1 className='topic-txt'>Latest View</h1>
                                <Zoom><p className='smallDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aliquam assumenda
                                    consequatur ducimus excepturi laudantium, optio pariatur quas recusandae unde. Aut
                                    autem cupiditate in ipsum itaque nesciunt placeat sapiente similique velit.</p>
                                </Zoom>
                            </Col>
                        </Row>

                    </div>
                    <div className="container  position-relative">

                        <div className='loader'></div>
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
                            <Col className='refi-desc border-side' sm={12} md={6} lg={6} xl={6}>
                                <Zoom><p
                                    className='pr-2 test-refi'>Lorem ipsum
                                    dolor sit amet, consectetur adipisicing
                                    elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                    quos
                                    tenetur
                                    velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                    commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                    quos
                                    tenetur
                                    velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                    commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                    quos
                                    tenetur
                                    velit veniam, veritatis voluptates voluptatum. <br/><br/> Dolorum, fugit quibusdam.
                                    Aperiam
                                    commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                    quos
                                    tenetur
                                    velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                    commodi,
                                    tenetur.</p></Zoom>
                            </Col>

                            <Col className='refi-desc' sm={12} md={6} lg={6} xl={6}>
                                <Zoom>
                                    <p className='pl-2'>Lorem ipsum
                                        dolor sit amet,
                                        consectetur adipisicing
                                        elit. Assumenda explicabo harum,
                                        <br/>illo ipsum minima mollitia necessitatibus omnis quos
                                        tenetur
                                        velit veniam, veritatis voluptates voluptatum.<br/><br/> Dolorum, fugit
                                        quibusdam.
                                        Aperiam
                                        commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                        quos
                                        tenetur
                                        velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                        commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                        quos
                                        tenetur
                                        velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                        commodi, tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Assumenda explicabo harum, illo ipsum minima mollitia necessitatibus omnis
                                        quos
                                        tenetur
                                        velit veniam, veritatis voluptates voluptatum. Dolorum, fugit quibusdam. Aperiam
                                        commodi,
                                        tenetur.</p></Zoom>
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
                                <Fade top><h1 className='eternelKola-topic'>Eternal <br/> Koalas</h1></Fade>
                                <Fade top><p className='eternelKola-desc'>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
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
                                </Fade>
                                <div className="nav-btn-grp d-flex justify-content-end">
                                    <Fade top> <a onClick={() => {
                                        localStorage.setItem('location', 2)
                                    }} className='btn-nav-view' href={RouteConstant.CONTACT_US_PATH}>
                                        Contact Us <Icon.ChevronsRight color={'white'}/>
                                    </a> </Fade>
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
