import React from "react"
import './sponsors.css'

import ansys from '../../../images/ansys.svg'
import signitive from '../../../images/signitive.png'
import solidworks from '../../../images/solidworks.png'
import altair from '../../../images/altair.png'
import altium from '../../../images/altium.png'
import delhivery from '../../../images/delhivery.png'
import janatics from '../../../images/janatics.png'

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
                        <img src={ansys} />
                        <img src={signitive} />
                        <img src={solidworks} />
                        <img src={altair} />
                        <img src={altium} />
                        <img src={delhivery} />
                        <img src={janatics} />
                    </div>
                </div>
            </div>
        </div>
    )
}