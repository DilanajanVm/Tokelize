import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import './animation.scss'

function AnimationTextLine() {

    useEffect(() => {
        const t1 = gsap.timeline();
        t1.from(".singleLine div ", {
            y: 200,
            ease: "power4.out",
            delay: 1,
            duration: 1.8,
            stagger: {
                amount: 0.4,
            },
        });

        return () => {};
    });

    return (
        <AppContainer className={'animationText'}>
            <Wrapper>
                <Line className="singleLine">
                    <Text>
                        Our mission
                    </Text>
                </Line>
                <Line className="singleLine">
                    <Text>
                      is to make
                    </Text>
                </Line>
                <Line className="singleLine">
                    <Text>
                        positive environmental
                    </Text>
                </Line>
            </Wrapper>
        </AppContainer>
    );
}

export default AnimationTextLine;

const AppContainer = styled.div`
 
`;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 11vw;
  position: relative;
  overflow: hidden;
  &:nth-of-type(1) {
    display: flex;
    justify-content: flex-start;
  }
  &:nth-of-type(3) {
    display: flex;
    justify-content: flex-start;
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: 150px;
  color: #fff;
  line-height: 10vw;
  span {
    font-family: "Major Mono Display", monospace;
    color: rgb(150, 149, 149);
    font-size: 10vw;
  }
`;