import React from "react"
import 'animate.css'
import TeamCard from "./TeamCard"

export default function TeamContent ({ team }) {
    return (
        <>
            <div className="flex">
                {team.map(({ name, photo, designation, linkedin, email }, i) => 
                    (
                        photo
                        ?
                        <TeamCard
                            name={name} photo={photo} designation={designation} position={i} linkedin={linkedin} email={email} 
                        />
                        :
                        null
                    )
                )}
            </div>
        </>
    )
}