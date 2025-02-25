import React, { useEffect, useState } from "react";
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP
} from "./HeroElements";
import Video from "../../videos/robocon.mp4";

let randint = (m, n) => parseInt(Math.random() * (n-m+1) + m)


const HeroSection = () => {
    let [ visible, setVisible ] = useState(false)
    let [ progress, setProgress ] = useState(0)
    let [ tagline, setTagline ] = useState(0)
    let [ display, setDisplay ] = useState(true)

    let taglineFull = "ENGINEER THE IMPOSSIBLE"
    let taglineShown = taglineFull.slice(0, tagline) 

    useEffect(() => {
        if (!visible) {
            if (tagline == taglineFull.length) return

            let delay = 100
            if (taglineFull[tagline] == " ") delay = 300

            setTimeout(() => setTagline(t => t+1), delay)
            return
        }

        if (progress == 100) {
            setTimeout(() => setVisible(false), 200)
            return
        }

        setTimeout(() => setProgress(i => {
            let n = i + randint(4, 8)
            return n>100 ? 100 : n
        }), randint(100, 150))
    })

    useEffect(() => {
        if (!visible) {
            setDisplay(false)
        }
    }, [ visible ])

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
                <HeroP className="cursor">
                    &nbsp;{taglineShown}&nbsp;
                </HeroP>
            </HeroContent>
            <div style = {{
                display: display ? "flex" : "none",
                opacity: visible ? 1 : 0,
                transitionDuration: "800ms",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "white",
                zIndex: 4
            }}>
                <div style={{position: "relative"}}>
                    <img src = "/logo.png" style = {{ height: "100px" }} />
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
