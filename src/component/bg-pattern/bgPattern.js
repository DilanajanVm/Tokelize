import React from "react";

class BgPattern extends React.Component {

    render() {

        let {bgColor,width,opacity}=this.props;
        return <div>


            <svg width={width} opacity={opacity} fill={bgColor} enableBackground="new 0 0 793 555" version="1.1" viewBox="0 0 793 555" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">

	<polygon points="0.1 282.3 152.6 194.3 152.6 369.7 0.1 457.7" className="st0"/>
                <polygon points="312.9 282.4 160.4 194.4 160.4 369.7 312.9 457.7" className="st0"/>


                <polygon points="320.7 282.8 473.2 194.8 473.2 370.1 320.7 458.2" className="st0"/>
                <polygon points="633.4 282.8 481 194.8 481 370.2 633.4 458.2" className="st0"/>

                <polygon points="640.9 461 793.3 549 793.3 373.6 640.9 285.6" className="st0"/>

                <polygon points="321 98.1 473.4 10.1 473.4 185.4 321 273.4" className="st0"/>

                <polygon points="641.6 98.5 794 10.5 794 185.9 641.6 273.9" className="st0"/>
</svg>

        </div>
    }
}

export default BgPattern;