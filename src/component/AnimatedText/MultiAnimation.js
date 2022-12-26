import React from "react";
import gsap from "gsap-trial";
import {SplitText} from "gsap-trial/SplitText"

class MultiAnimation extends React.Component {


    componentDidMount() {

        gsap.registerPlugin(SplitText);


        const childSplit = new SplitText(".dialog-box-view", {
            type: "lines",
            linesClass: "split-child"
        });

        gsap.from(childSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: "power4",
            stagger: 0.1
        });
    }

    render() {
        return <div>
            <div class="text-heading">
                {/*<h1>*/}
                {/*    Lorem Ipsum is dummy text Lorem Ipsum is dummy text*/}
                {/*</h1>*/}
            </div>
        </div>
    }
}

export default MultiAnimation;