import React, {useEffect, useRef} from "react";
import {render} from "react-dom";
import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";
import "./customerSlider.scss";
import temp01 from '../../assets/images/tempImg/Group 115.png'
import temp02 from '../../assets/images/tempImg/Group 116.png'

gsap.registerPlugin(Draggable);

const CustomSlider = () => {
    const dragInstance = useRef(null);
    const dragTarget = useRef(null);

    useEffect(() => {
        Draggable.create(".carousel", {
            type: "rotation",
            inertia: true,
            minimumMovement: 0,
            snap: function (endValue) {
                var step = 10;
                return Math.round(endValue / step) * step;
            }
        });
    }, []);

    return (
        <div className='mainSliderWrapper'>
            <div class="carousel">

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp01} alt=""/>
                    </div>
                </div>

                <div class="wrapper">
                    <div className='content-holder'>
                        <img className='img-details' src={temp02} alt=""/>
                    </div>
                </div>


            </div>

            <div className='loader'></div>
        </div>
    );
};
export default CustomSlider;
