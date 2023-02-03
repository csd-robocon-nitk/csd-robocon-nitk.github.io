import React from "react";
import {FaInstagram,FaYoutube, FaLinkedin, } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import {
    FooterContainer,
    FooterLink,
    FooterLinkTitle,
    FooterLinksContaier,
    FooterLinksItems,
    FooterLinksWrapper,
    FooterWrap,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContaier>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">
                                    Vision
                                </FooterLink>
                                
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="https://www.nitk.ac.in/">NITK</FooterLink>
                                <FooterLink to="https://csd.nitk.ac.in/">
                                    CSD
                                </FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContaier>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                            Robocon
                            </SocialLogo>
                            <WebsiteRights>
                                {" "}
                                
                                Robocon
                                 ©   {new Date().getFullYear()}
                                All rights reserved 

                                FOLLOW US ON SOCIAL MEDIA TO KNOW MORE ABOUT US
                            </WebsiteRights>
                            
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.instagram.com/csdroboconnitk/"
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.youtube.com/@csdroboconnitk9210"
                                    target="_blank"
                                    aria-label="Youtube"
                                >
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink
                                    href="https://www.linkedin.com/company/csd-robocon-nitk"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
