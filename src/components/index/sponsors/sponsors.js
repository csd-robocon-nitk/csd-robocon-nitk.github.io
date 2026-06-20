import React from "react"
import './sponsors.css'

import ansys from '../../../images/ansys.svg'
import signitive from '../../../images/signitive.png'
import solidworks from '../../../images/solidworks.png'
import altair from '../../../images/altair.png'
import altium from '../../../images/altium.png'
import delhivery from '../../../images/delhivery.png'
import janatics from '../../../images/janatics.png'
import hiq from '../../../images/hiq.png'

export default function SponsorsSection () {
    return (
        <div id="sponsors" className="dark">
            <div id="container">
                <h1>SUPPORTING US</h1>
                
                {/* Season 2026 Sponsors - Prime Highlight */}
                <div id="season-sponsors-highlight">
                    <h2>Season 2026 Sponsors</h2>
                    
                    {/* PCB Partner Section (Above) */}
                    <div className="role-section">
                        <div className="logos-row">
                            <div className="sponsor-card-wrapper">
                                <img src={hiq} alt="Hi-Q" />
                                <span className="sponsor-title gold">PCB Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Design Partners Section (Below) */}
                    <div className="role-section">
                        <div className="logos-row">
                            <div className="sponsor-card-wrapper">
                                <img src={solidworks} alt="Solidworks" />
                                <span className="sponsor-title silver">Design Partner</span>
                            </div>
                            <div className="sponsor-card-wrapper">
                                <img src={ansys} alt="Ansys" />
                                <span className="sponsor-title silver">Design Partner</span>
                            </div>
                            <div className="sponsor-card-wrapper">
                                <img src={altium} alt="Altium" />
                                <span className="sponsor-title silver">Design Partner</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Past Sponsors */}
                <div id="past-sponsors-container">
                    <h2>Past Sponsors</h2>
                    <div className="logos-row past-logos">
                        <img src={ansys} alt="Ansys" />
                        <img src={signitive} alt="Signitive" />
                        <img src={solidworks} alt="Solidworks" />
                        <img src={altair} alt="Altair" />
                        <img src={altium} alt="Altium" />
                        <img src={delhivery} alt="Delhivery" />
                        <img src={janatics} alt="Janatics" />
                    </div>
                </div>
            </div>
        </div>
    )
}