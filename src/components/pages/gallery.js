import React, { useState } from 'react'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import './gallery.css'


export default function Gallery () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div id="gallery-page" className='dark'>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div id="container" className="dark">
                <h2>Gallery</h2>
                <div id="grid">
                    {
                        (new Array(27)).fill(0).map((el, i) => {
                            let n = 2-Math.floor(Math.log(i+1)/Math.log(10))
                            console.log(n)
                            let x = ""
                            for (let i=0 ; i<n ; i++) x += "0"
                            x += i+1

                            let path = `${process.env.PUBLIC_URL}/images/gallery/${x}.jpg`
                            return <img src={path}  key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}