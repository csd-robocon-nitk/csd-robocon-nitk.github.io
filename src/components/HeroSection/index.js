import React, { useState } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements";
import Video from "../../videos/robocon.mp4";
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id="home">
            <HeroBg>
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        background: "#232a34",
                        OObjectFit: "cover",
                    }}
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                ></video>
            </HeroBg>
            <HeroContent>
                <HeroH1>CSD ROBOCON NITK</HeroH1>
                <HeroP>
                    The Robocon team from National Institute Of Technology
                    Karnataka, Surathkal
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;