import React from "react";
import HeroSection from "../HeroSection";
import GallerySection from '../index/gallery/gallery'
import AboutSection from "../index/about/about";
import ContactSection from "../index/contact/contact";
import ParallaxSection from '../index/parallax/parallax'
import SocialSection from '../index/social/social'

const Home = () => {
    return (
        <>
            <HeroSection />
            <ParallaxSection />
            <SocialSection />
            <AboutSection />
            <GallerySection />
            <ContactSection />
        </>
    );
};

export default Home;
