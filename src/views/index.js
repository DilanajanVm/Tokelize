import React from "react"
import './view-style/home.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import FooterComponent from '../@core/layouts/components/footer';
import 'antd/dist/antd.css';
import './view-style/overWriteStyle.scss';
import {handleLoader} from "../redux/actions/spriner";
import {connect} from "react-redux";
import {handleRefreshNavBar} from "../redux/actions/navbar";
import bg_black from '../assets/images/background/bg-black-pattern.png'
import bg_color_pattern from '../assets/images/background/bg-pattern.svg'
import tokelize_light from '../assets/images/logo/tokelize-light.png'
import dialog_box from '../assets/images/background/dialog box -hero.svg'
import eternel_logo from '../assets/images/logo/Eternal Koalas logo.png'
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";
import BgPattern from '../component/bg-pattern/bgPattern'
import BgPatternBase from '../component/bg-pattern-base/bgPattern'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import enternelKolaBrandLogo from '../assets/images/logo/eternel_logo_brand.png'
import CustomSlider from "../component/Slider/CustomSlider";
import * as Icon from 'react-feather';

class Home extends React.Component {

    async componentDidMount() {
        this.props.spinnerHandler(false);
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }
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

                                <h1 className='txt-mission'><span className='special-text'> Our mission </span> &nbsp;is
                                    to
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
                                        <p className={'eternel_desc'}>
                                            Lorem Ipsum is simply dummy text of Lorem Ipsum iLorem Ipsum is simply dummy
                                            text of Lorem Ipsum is simply!Ipsum is simply dummy text of Lorem Ipsum is
                                            simply!
                                        </p>

                                        <a className={'btn_eternel_contact_us'} href="/"> Contact Us  <Icon.ChevronsRight color={'white'} /></a>
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
                            <Col sm={12} md={6} lg={4} xl={4}>
                                <img className='about-logo' src={tokelize_light} alt=""/>
                            </Col>
                            <Col sm={0} md={0} lg={1} xl={1}> </Col>
                            <Col className="txt-content" sm={12} md={6} lg={7} xl={7}>
                                <h1 className='topic-txt'>TOKELIZE</h1>
                                <p>Tokelize was founded in 2022 and incorporated in the city of Dubai in the United Arab
                                    Emirates. With the mission of creating NFT projects that have a significant positive
                                    impact on our environment and society, Tokelize started with its first NFT
                                    collection called Eternal Koalas.</p>


                                <a className='nav-btn-holders' href="/">About Us  <Icon.ChevronsRight color={'white'} /></a>
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

                    <CustomSlider/>
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
                                className='pr-2'>Lorem ipsum
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
                                    <a href="/"> Contact Us  <Icon.ChevronsRight color={'white'} /> </a>
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
