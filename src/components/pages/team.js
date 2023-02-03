import React from 'react'
import { useState } from 'react';
import './team.css'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import team_data from "../../team_data"
import TeamContent from '../team/TeamContent';


export default function Team () {

    let teams = []
    for (const team in team_data) {
        teams.push(team)
    }

    const [isOpen, setIsOpen] = useState(false);
    const [team, setTeam] = useState(teams[0])

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="team-page" className="dark">
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <div id="container">
                <h2>Our Team</h2>
                <div id="nav">
                    {teams.map(team_name => <div className="team-nav-item" id={`${team_name == team && "active"}`} key={team_name} onClick={() => setTeam(team_name)}>{team_name}</div>)}
                </div>

                <TeamContent team={team_data[team]} />
            </div>
        </div>
    )
}