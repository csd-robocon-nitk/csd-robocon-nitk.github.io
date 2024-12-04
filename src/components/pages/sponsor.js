import React from "react"
import "./sponsor.css"
import SponsorsSection from "../index/sponsors/sponsors"

export default function Sponsor () {
    return (
        <>
            <div className = "nav-placeholder"></div>
            <div id="sponsor-page" className="dark">
                <div id = "container">
                    <h1>GET MORE INFO</h1>
                    <h2>Brochure</h2>
                    <iframe src="https://drive.google.com/file/d/1lDWEuggEAZjF9-TGd573hL4fIafB4QGa/preview" width="100%" height="600" allow="autoplay"></iframe>
                    {/* <iframe src="/assets/CRN Brochure 2024.pdf" width="100%" height="600" allow="autoplay"></iframe> */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <h1>ENDOWMENT FUND</h1>
                    <h2>Account Details</h2>
                    <br/>
                    <div id = "account">
                        <div><b>NITK/KREC Endowment Fund</b></div>
                        <div><b>Account Number:</b> 37481178720</div>
                        <div><b>Branch:</b> SBI, NITK Campus Branch, Surathkal, Mangalore - 575 025</div>
                        <div><b>IFSC:</b> SBIN0002273</div>
                        <br/>
                        <div>ALL PAYMENTS MADE TO CSD ROBOCON NITK ARE SUBJECT TO <b>80G 100% TAX DEDUCTION</b></div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <h2>Quick Links</h2>

                    <div id = "links">
                        <a href = {process.env.PUBLIC_URL + "/assets/CSD Robocon NITK Endowment Form.pdf"} target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    description
                                </span>
                                Endowment Form
                            </div>
                        </a>

                        <a href = {process.env.PUBLIC_URL + "/assets/2024/CRN 2024 Season Report.pdf"} target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    newspaper
                                </span>
                                Season Report 2023-24
                            </div>
                        </a>

                        <a href = "/donate" target = "_blank">
                            <div>
                                <span class="material-symbols-outlined">
                                    link
                                </span>
                                Donate Here
                            </div>
                        </a>
                    </div>
                    <div id = "links-caption">
                        * Endowment Form needs to be filled after every payment
                        <br/>
                        ** For any queries, contact robocon@nitk.edu.in 
                    </div>
                    
                </div>
            </div>
            <SponsorsSection />
        </>
    )
}