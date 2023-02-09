import React from 'react'
import './parallax.css'
import robo1 from '../../../images/robo1.png'

export default function ParallaxSection () {

    return (
        <div id="parallax" className="dark">
            <div id="story">
                <h1>ABOUT</h1>
                <h2>CSD Robocon NITK</h2>
                <p>
                    CSD Robocon NITK is one of the foremost robotics
                    teams at NITK. Since 2018, we have been participating
                    in the ABU Robocon (Asia Pacific Broadcasting Union
                    Robotics Contest), which is touted as the ultimate
                    robotics challenge for undergraduates.<br/><br/>
                    We build robots that aim for incredible precision,
                    reliability and speed or, in other words, industrial
                    performance. Sadly, the pandemic disrupted the 2022
                    event for us, but we weren’t deterred by it. We strived to
                    simulate the robots on ROS, honing our skills for the
                    next event. This year, we aim to be back with a bang!
                </p>
            </div>
            <div id="journey">
                    <h1>2018 - PRESENT</h1>
                    <h2>Our Journey</h2>
                    <span id="timeline-top"></span>
                    <div id="event">
                        <div id="content">
                            The year we decided to gather a team for
                            ABU Robocon. The experience helped us develop
                            the thought processes
                            required for the upcoming years.
                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
                    <div id="event">
                        <div id="content">
                            We built NITK's first walking
                            robot - a quadruped
                            which tackled planes,
                            slopes and steps alike.

                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
                    <div id="event">
                        <div id="content">
                            We adopted pneumatics
                            to actuate mechanisms.
                            It provided great impulse
                            for significantly less
                            weight.
                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
                    <div id="event">
                        <div id="content">
                            We strategically designed
                            one bot to shoot arrows
                            and the other bot to deflect
                            incoming arrows and
                            rotate the bins.
                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
                    <div id="event">
                        <div id="content">
                            We designed a robot with a
                            Cartesian manipulator to pick
                            up and pile discs accurately.
                            The other one shot balls to
                            break the Lagori.
                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
                    <div id="event">
                        <div id="content">
                            We have brainstormed multiple
                            mechanism designs for the
                            coming year's competition.
                            Currently, we are prototyping them
                            with the materials we have,
                            innovative ideas and intricate
                            advice from our alumni
                        </div>
                        <div id="images">
                            <img src={robo1} />
                        </div>
                    </div>
            </div>
        </div>
    )
}