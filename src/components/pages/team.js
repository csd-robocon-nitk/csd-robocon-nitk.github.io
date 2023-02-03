import React from 'react'
import { useState } from 'react';
import './team.css'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import team_data from "../../team_data"
import TeamContent from '../team/TeamContent';
import TeamCard from '../team/TeamCard';


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

                <div class="section">
                    <h3>Core Team</h3>
                    <div className='flex'>
                        <TeamCard
                            {...team_data['Core Team'][0]}
                        />
                    </div>
                    <div className='flex'>
                        <TeamCard
                            {...team_data['Core Team'][1]}
                        />
                        <TeamCard
                            {...team_data['Core Team'][2]}
                        />
                        <TeamCard
                            {...team_data['Core Team'][3]}
                        />
                    </div>
                </div>

                <div class="section">
                    <h3>Electronics and Programming Team</h3>
                    <TeamContent
                        team={team_data['ECE & P Team']}
                    />
                </div>

                <div class="section">
                    <h3>Mechanical Team</h3>
                    <TeamContent
                        team={team_data['Mechanical Team']}
                    />
                </div>

                <div class="section">
                    <h3>Support Team</h3>
                    <TeamContent
                        team={team_data['Support Team']}
                    />
                </div>
            </div>
        </div>
    )
}