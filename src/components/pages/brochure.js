import React from "react";
import "./brochure.css";

export default function Brochure() {
    const pdfUrl = process.env.PUBLIC_URL + "/assets/CRN Brochure 2026_compressed.pdf";

    return (
        <div id="brochure-page" className="dark">
            <div className="nav-placeholder" />
            <div id="container">
                <div className="section">
                    <h1>GET MORE INFO</h1>
                    <h2>Brochure</h2>
                    <p>
                        View or download the official brochure of CSD Robocon NITK detailing our activities, team history, and achievements.
                    </p>
                    <br />
                    <div className="pdf-container">
                        <iframe
                            src={pdfUrl}
                            width="100%"
                            height="800px"
                            title="CSD Robocon NITK Brochure"
                            allow="autoplay"
                        />
                    </div>
                    <br />
                    <div className="download-container">
                        <a href={pdfUrl} download="CRN Brochure 2026_compressed.pdf" className="button">
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
