import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll/modules";
import logo from "../../images/logo.png"

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    const [scrolNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrolNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <img src={logo} style={{maxHeight: "80px", padding: "10px" }}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    activeClass="active"
                                >
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="gallery"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Gallery
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Team
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="signup"
                                    smooth={true}
                                    duration={1000}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Contact Us
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn> */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;