import React from "react"
import 'animate.css'

export default function TeamContent ({ team }) {
    return (
        <div id="team-content">
            {team.map(({ name, photo, designation }, i) => 
            <div key={name} className="team-card light animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
                <img src={`${process.env.PUBLIC_URL}/images/team/${photo}`} />
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
            )}
        </div>
    )
}