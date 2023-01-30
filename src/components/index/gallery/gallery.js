import './gallery.css'
import React from 'react'
import collage from '../../../images/collage.png'
import { Link } from 'react-router-dom'

export default function GallerySection () {
    return (
        <div id="gallery" className="light">
            <div id="left">
                <img src={collage} />
            </div>
            <div id="right">
                <h1>GALLERY</h1>
                <h2>Snapshots</h2>
                <Link to="/gallery" className="button">View More</Link>
            </div>
        </div>
    )
}