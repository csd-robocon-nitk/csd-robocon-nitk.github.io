import React from "react"
import './sponsors.css'

import bosch from '../../../images/bosch.png'
import ansys from '../../../images/ansys.png'
import signitive from '../../../images/signitive.png'
import capstone from '../../../images/capstone.jpg'
import solidworks from '../../../images/solidworks.png'
import altair from '../../../images/altair.png'
import altium from '../../../images/altium.png'
import ingenium from '../../../images/ingenium.webp'

export default function SponsorsSection () {
    return (
        <div id="sponsors" className="dark">
            <div id="container">
                <h1>SUPPORTING US</h1>
                <h2>Our Sponsors</h2>
                <div id="images">
                    {/* <div className = "row">
                        <img src={bosch} />
                    </div> */}
                    <div className="row">
                        <img src={bosch} />
                        <img src={ansys} />
                        <img src={signitive} />
                        <img src={capstone} />
                        <img src={solidworks} />
                        <img src={altair} />
                        <img src={altium} />
                        <img src={ingenium} />
                    </div>
                </div>
            </div>
        </div>
    )
}