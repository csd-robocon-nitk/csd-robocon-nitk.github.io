import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #080311;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(159, 107, 255, 0.12) 0%, rgba(10, 5, 20, 0.8) 100%),
                    linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
        z-index: 2;
        pointer-events: none;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: clamp(38px, 6vw, 75px);
    font-weight: 800;
    text-align: center;
    margin: 0;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ffffff 40%, #D0BDF4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 40px rgba(159, 107, 255, 0.25);
    line-height: 1.15;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: clamp(32px, 5vw, 48px);
        letter-spacing: 1px;
    }
`;

export const HeroP = styled.p`
    font-family: 'Share Tech Mono', monospace;
    color: #B27BFF;
    font-size: clamp(16px, 2.5vw, 28px);
    font-weight: 500;
    text-align: center;
    max-width: 800px;
    letter-spacing: 0.3em;
    margin-top: 25px;
    text-shadow: 0 0 15px rgba(178, 123, 255, 0.6);
    text-transform: uppercase;
    position: relative;
    display: inline-block;

    &.cursor::after {
        content: '|';
        animation: blink 1s step-end infinite;
        color: #B27BFF;
        margin-left: 3px;
        font-weight: 900;
    }

    @keyframes blink {
        from, to { color: transparent }
        50% { color: #B27BFF; }
    }

    @media screen and (max-width: 768px) {
        font-size: clamp(14px, 2.2vw, 20px);
        letter-spacing: 0.18em;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
