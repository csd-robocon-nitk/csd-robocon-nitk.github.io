import './gallery.css'
import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../../images/001.jpg'
import img2 from '../../../images/002.jpg'
import img3 from '../../../images/003.jpg'
import img4 from '../../../images/004.jpg'
import img5 from '../../../images/005.jpg'
import img6 from '../../../images/006.jpg'
import { Link } from 'react-router-dom'

export default function GallerySection () {

    let [visible, setVisible] = useState(false)
    let images = useRef(0)

    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting)
            setVisible(true)
        // else
        //     setVisible(false)
    })

    useEffect(_ =>
        observer.observe(images.current)
    )

    return (
        <div id="gallery" className="dark">
            <div id="left" className={visible ? "visible" : undefined} ref={images}>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
            </div>
            <div id="right">
                <h1>GALLERY</h1>
                <h2>Snapshots</h2>
                <Link to="/gallery" className="button">View More</Link>
            </div>
        </div>
    )
}