import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo.png"
import { useLocation } from "react-router-dom";

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
        if (document.body.scrollTop >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    let location = useLocation()
    let [ path, setPath ] = useState(location.hash)

    useEffect(() => setPath(location.pathname), [ location ])

    useEffect(() => {
        document.body.addEventListener("scroll", changeNav);
    }, []);
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrolNav}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <img src={logo} style={{maxHeight: "80px", padding: "10px" }}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to="/"
                                    active={path == "/"}
                                >
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/gallery"
                                    active={path=="/gallery"}
                                >
                                    Gallery
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="/team"
                                >
                                    Team
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="http://csd.nitk.ac.in/"
                                >
                                    CSD
                                </NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
