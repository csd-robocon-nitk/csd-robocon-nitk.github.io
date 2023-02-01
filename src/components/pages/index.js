import React, { useState } from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Services from "../Services";
import Footer from "../Footer";
import GallerySection from '../index/gallery/gallery'
import AboutSection from "../index/about/about";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <ParallaxSection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
