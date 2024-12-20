import React from "react";
import "./about.css"
import image from "../../../images/LOGO_ROBOCON2024.png"

export default function AboutSection () {
    return (
        <div id="about" className="dark">
            <div id="left">
                <h1>ABU ROBOCON</h1>
                <h2>An Ultimate Robotics Contest for Undergrads</h2>
                <p>We build Robots that aim at incredible Precision, Reliability and Speed or in other words Industrial performance.</p>
                <a className="button" href="https://aburobocon2025.mnb.mn/en" target="_blank">Learn More</a>
            </div>
            <div id="right">
                <img src={image} />
            </div>
        </div>
    )
}