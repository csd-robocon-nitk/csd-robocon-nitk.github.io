import React from 'react'
import './social.css'

export default function SocialSection () {

    return (
        <div id="social" className="light">
            <h1>VIDEOS</h1>
            <h2>A Glimpse into Our Work</h2>
            <div id="videos">
                <iframe src="https://www.youtube.com/embed/B3DctwOAsaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/eEnqrpgW8jU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}