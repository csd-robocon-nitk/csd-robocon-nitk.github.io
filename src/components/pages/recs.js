import { FaWhatsapp } from "react-icons/fa"
import { LuCircuitBoard } from "react-icons/lu"
import { FaGears } from "react-icons/fa6"
import { GrMultimedia } from "react-icons/gr"

import "./recs.css"

export default function RecsPage () {
    return (
        <div id="recs-page" className="dark">
            <div className="nav-placeholder" />
            <h1>HELLO BATCH OF 2029</h1>
            <h2>We Are Recruiting!</h2>

            <a className="link" href="https://chat.whatsapp.com/LhBqd8Zz1UZFWxJKHmgFQh" target="_blank">
                <div className="link-content">
                    <FaWhatsapp size={40} />
                    <div className="link-text">
                        <p>Join the WhatsApp Group</p>
                        <p>for quick updates and queries</p>
                    </div>
                </div>
            </a>

            <a className="link" href="https://unstop.com/o/BAbxjfr" target="_blank">
                <div className="link-content">
                    <LuCircuitBoard size={40} />
                    <div className="link-text">
                        <p>Register for Electronics and Programming Subsystem</p>
                    </div>
                </div>
            </a>

            <a className="link" href="https://unstop.com/o/jFYczLW" target="_blank">
                <div className="link-content">
                    <FaGears size={40} />
                    <div className="link-text">
                        <p>Register for Mechanical Subsystem</p>
                    </div>
                </div>
            </a>
            
            {/* <a className="link" href="https://forms.gle/nZ9nUUgPm4QswZkJ8" target="_blank">
                <div className="link-content">
                    <GrMultimedia size={35} />
                    <div className="link-text">
                        <p>Register for Support Team (Media, Marketing & Web)</p>
                    </div>
                </div>
            </a> */}

            <h1 className="note">DEADLINE FOR REGISTRATION IS 19TH JAN 2026</h1>
        </div>
    )
}