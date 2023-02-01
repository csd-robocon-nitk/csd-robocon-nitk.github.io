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
import SocialSection from '../index/social/social'

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
            <ParallaxSection />
            <SocialSection />
            <AboutSection />
            <GallerySection />
            <ContactSection />
            <Footer />
        </>
    );
};

export default Home;
