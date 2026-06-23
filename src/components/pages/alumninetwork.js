import React from "react";
import "./alumninetwork.css";
import alumninetwork_data from "../../alumninetwork_data";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AlumniNetwork() {
    const { alumni2026, alumni2025 } = alumninetwork_data;

    return (
        <div id="alumni-network-page" className="dark">
            <div className="nav-placeholder" />
            <div id="container">
                <h2>Alumni Network</h2>

                <h3 className="batch-heading">2026 Alumni Batch</h3>
                <div className="flex">
                    {alumni2026.map(({ name, photo, designation, linkedin, email }, i) => (
                        <div key={name} className="alumni-card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
                            {photo ? (
                                <img src={`${process.env.PUBLIC_URL}/images/team/${photo}`} alt={name} />
                            ) : null}
                            <h4>{name}</h4>
                            {designation ? (
                                <p className="designation">{designation}</p>
                            ) : null}
                            <div className="socials">
                                {linkedin ? <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={27} /></a> : null}
                                {email ? <a href={`mailto:${email}`}><MdEmail size={31} /></a> : null}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="batch-heading">2025 Alumni Batch</h3>
                <div className="flex">
                    {alumni2025.map(({ name, photo, designation, linkedin, email }, i) => (
                        <div key={name} className="alumni-card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
                            {photo ? (
                                <img src={`${process.env.PUBLIC_URL}/images/team/${photo}`} alt={name} />
                            ) : null}
                            <h4>{name}</h4>
                            {designation ? (
                                <p className="designation">{designation}</p>
                            ) : null}
                            <div className="socials">
                                {linkedin ? <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={27} /></a> : null}
                                {email ? <a href={`mailto:${email}`}><MdEmail size={31} /></a> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
