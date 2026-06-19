import React from 'react'
import './social.css'

export default function SocialSection () {
    return (
        <div id="social" className="light">
            <div id="season-2026-banner">
                <video autoPlay muted loop playsInline className="banner-video-bg">
                    <source src={`${process.env.PUBLIC_URL}/season-2026/images/hero-video.mp4`} type="video/mp4" />
                </video>
                
                {/* Main Banner Content */}
                <div className="banner-main-area">
                    <div className="bot-column left-col">
                        <img src={`${process.env.PUBLIC_URL}/season-2026/images/bot1-render.png`} alt="R1 Bot" />
                    </div>
                    <div className="banner-content">
                        <div className="banner-eyebrow">ABU ROBOCON 2026</div>
                        <h2 className="banner-title">KUNG FU <span>QUEST</span></h2>
                        <a href={`${process.env.PUBLIC_URL}/season-2026/`} className="banner-link">
                            Explore Season 2026 <span className="arrow">→</span>
                        </a>
                    </div>
                    <div className="bot-column right-col">
                        <img src={`${process.env.PUBLIC_URL}/season-2026/images/bot2-render.png`} alt="R2 Bot" />
                    </div>
                </div>

                {/* Sidebar YouTube Videos */}
                <div className="banner-videos-sidebar">
                    <h3>A Glimpse into Our Work</h3>
                    <div className="sidebar-videos">
                        <iframe src="https://www.youtube.com/embed/B3DctwOAsaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/FTopsDAp2-o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}