import React from 'react'
import './team.css'
import team_data from "../../team_data"
import TeamContent from '../team/TeamContent';
import TeamCard from '../team/TeamCard';


export default function Team () {
    return (
        <div id="team-page" className="dark">
            <div className='nav-placeholder' />
            <div id="container">
                <h2>Our Team</h2>

                <div className="section">
                    <h3>Core Team</h3>
                    {
                        team_data['Core Team'].map(data => <TeamContent team={data} />)
                    }
                </div>

                <div className="section">
                    <h3>Electronics and Programming Team</h3>
                    <TeamContent
                        team={team_data['EC&P Team']}
                    />
                </div>

                <div className="section">
                    <h3>Mechanical Team</h3>
                    <TeamContent
                        team={team_data['Mechanical Team']}
                    />
                </div>

                <div className="section">
                    <h3>Support Team</h3>
                    <TeamContent
                        team={team_data['Support Team']}
                    />
                </div>

                <h2>Faculty Advisors</h2>
                
                <div className="section">
                    <div className="flex">
                        {
                            team_data['Faculty Advisors'].map(d => 
                                <TeamCard 
                                    {...d}
                                />    
                            )    
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}