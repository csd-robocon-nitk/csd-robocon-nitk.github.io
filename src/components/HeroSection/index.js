import React, { useEffect, useState } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP
} from "./HeroElements";
import Video from "../../videos/robocon.mp4";
import logo from "../../images/logo.png"

let randint = (m, n) => parseInt(Math.random() * (n-m+1) + m) 

const HeroSection = () => {
    let [ visible, setVisible ] = useState(true)
    let [ progress, setProgress ] = useState(0)

    useEffect(() => {
        if (!visible) return
        if (progress == 100) {
            setTimeout(() => setVisible(false), 1000)
            return
        }

        setTimeout(() => setProgress(i => {
            let n = i + randint(4, 8)
            return n>100 ? 100 : n
        }), randint(100, 150))
    })

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
            </HeroContent>
            <div style = {{
                display: "flex",
                opacity: visible ? 1 : 0,
                transitionDuration: "800ms",
                position: "fixed",
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                zIndex: 4
            }}>
                <div style={{position: "relative"}}>
                    <img src = {logo} style = {{ height: "100px" }} />
                    <div style = {{
                        height: "100px",
                        width: `${100-progress}%`,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        backgroundColor: "#000000aa"
                    }}/>
                </div>
                <p>{progress}%</p>
            </div>
        </HeroContainer>
    );
};

export default HeroSection;
