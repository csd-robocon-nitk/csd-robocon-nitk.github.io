import React from "react"
import './sponsors.css'

import nitkalumni from '../../../images/nitk alumni.png'
import csd from '../../../images/csd.jpg'
import ansys from '../../../images/ansys.png'

export default function SponsorsSection () {
    return (
        <div id="sponsors" className="dark">
            <div id="container">
                <h1>SUPPORTING US</h1>
                <h2>Our Sponsors</h2>
                <div id="images">
                    <img src={nitkalumni} />
                    <img src={csd} />
                    <img src={ansys} />
            </div>
            </div>
        </div>
    )
}