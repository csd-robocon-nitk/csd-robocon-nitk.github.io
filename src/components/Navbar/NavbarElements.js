import styled from "styled-components";
import { Link as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "rgba(10, 6, 20, 0.95)" : "transparent")};
    backdrop-filter: ${({ scrollNav }) => (scrollNav ? "blur(8px)" : "none")};
    box-shadow: ${({ scrollNav }) => (scrollNav ? "0px 4px 20px rgba(139, 92, 246, 0.15)" : "none")};
    border-bottom: ${({ scrollNav }) => (scrollNav ? "1px solid rgba(208, 189, 244, 0.1)" : "none")};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.4s ease-in-out;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: #e5def0;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.2rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    border-bottom: 3px solid transparent;

    &:hover {
        color: #B27BFF;
        text-shadow: 0 0 10px rgba(178, 123, 255, 0.5);
    }

    ${({ active }) => active && `
        border-bottom: 3px solid #8B5CF6;
        color: #ffffff;
        text-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
    `}
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;