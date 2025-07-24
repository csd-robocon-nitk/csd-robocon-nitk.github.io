import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function TeamCard ({ name, photo, designation, position: i, linkedin, email }) {
    if (designation)
    return (
        <div key={name} className="team-card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
            {
                photo
                ?
                <img src={`${process.env.PUBLIC_URL}/images/team/${photo}`} />
                :
                null
            }
            <h4>{name}</h4>
            <p>{designation}</p>
        </div>
    )


    else
    return (
        <div key={name} className="team-details-card animate__animated animate__zoomIn" style={{"animation-delay": `${i*100}ms`}}>
            {
                photo
                ?
                <img src={`${process.env.PUBLIC_URL}/images/team/${photo}`} />
                :
                null
            }
            <h4>{name}</h4>
            <div className="socials">
                {linkedin ? <a href={linkedin} target="_blank"><FaLinkedin size={27} /></a> : null }
                {email ? <a href={`mailto:${email}`}><MdEmail size={31} /></a> : null }
            </div>
        </div>
    )
}