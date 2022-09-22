import styled, { css, keyframes } from "styled-components";
import SpiderSVG from '../general/icons/landingAssets/spider.svg';

export const LandingContainer = styled.div`
    position: absolute;
    top: -95px;
    width: 100%;
    height: calc(100vh - 45px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`

const auxLandingAnimation = keyframes`
    0% { overflow: none; }
    100% { overflow: scroll; }
`

export const AuxLandingScroll = styled.div<{ animation: boolean }>`
    position: relative;
    width: 100%;
    height: calc(100vh - 45px);
    display: flex;
    align-items: center;
    flex-direction: column;
    // transition: all 1s linear;
    ${props =>props.animation ? css`
        animation ${auxLandingAnimation} 1ms linear 8.9s forwards;
    `:`
        overflow: scroll;
    `}
    
    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none
`

const textAnimation = keyframes`
    0% {
        filter: blur(1000px) contrast(30);
        opacity: 0;  
    }
     
    12% {
        transform: translateY(-45px);
        opacity: 0;
        top: 0;   
    }

    45% { 
        filter: blur(1000px) contrast(30); 
        transform: translateY(0px);
    }

    99% {min-height: auto;}

    100% {
        filter: blur(0px) contrast(1);
        opacity: 1;
        min-height: calc(80vh + 265px);
        // min-height: calc(80vh + 340px);
    }
`

export const LandingText = styled.div<{ animation: boolean }>`
    position: absolute;
    top: 235px;
    top: calc(50vh - 170px);
    display: flex;
    flex-direction: row;
    ajustify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    width: fit-content;
    font-size: 100px;
    font-family: Modak;
    color: ${props => props.theme.color.main};
    filter: blur(10px) contrast(30);
    opacity: 0;
    margin-bottom: 95px;
    text-shadow: -2px 2px 0 #fff,
                2px 2px 0 #fff,
                2px -2px 0 #fff,
                -2px -2px 0 #fff,
                5px 5px 0px ${props => props.theme.color.main}, 
                10px 10px 0px #fff, 
                15px 15px 0px ${props => props.theme.color.secondary},
                20px 20px 0px ${props => props.theme.color.third},
                25px 25px 0px ${props => props.theme.color.main};

    ${props =>props.animation ? css`
        animation ${textAnimation} 8s linear 1s forwards;
    `:`
        filter: blur(0px) contrast(1);
        opacity: 1;
        width: auto;
        min-height: calc(80vh + 500px);
    `}
            
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        font-size: 75px;
        top: calc(50vh - 240px);
        align-items: center;
    }
`

export const PictureContainer = styled.div<{ picture: string }>`
    position: relative;
    background-image: url(${props => props.picture});
    background-repeat: no-repeat; 
    background-color: transparent;
    background-position: 50% 50%;
    background-size: cover;
    width: 200px;
    height: 200px;
    min-height: 200px;
    margin-left: 40px;
    border-radius: 50%;
    border: 6px solid #fff;

    @media only screen and (max-width: 768px) {
        background-position: 40%, 40%;
        margin-left: 0px;
        margin-top: 40px;
    }
    
    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        display: block;
        width: 100px;
        height: 100px;
        z-index: -1;
        box-shadow: 1px 1px 100px 35px ${props => props.theme.color.main};
    }
`

const spiderAnimation = keyframes`
    0% {transform: translateY(-195px);}

    7% {
        transform: translateY(-95px);
        height: 100px;
    }
    12% {height: 100px;}

    45% {height: 50vh;}
    55% {height: 50vh;}
    85% {
        height: 120px;
        transform: translateY(-95px);
    }
    95% {
        height: 120px;
        transform: translateY(-95px);
    }
    100% {transform: translateY(-195px);}
`

const lightAnimation = keyframes`
    0% {}

    7% {
        width: 0px; height: 0px;
        left: 50%; top 50px;
    }
    12% {
        width: 100px; height: 100px;
        left: calc(50% - 50px); top: 0;
        transform: translateY(-45px);

    }

    45% {
        left: calc(50% - 50px); top: 0;
        transform: translateY(calc(50vh - 145px));
        width: 100px; height: 100px;
    }
    55% {
        transform: translateY(calc(50vh - 145px));
        width: 100px; height: 100px;
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(calc(50vh - 95px));
        width: 100px; height: 100px;
    }
`

export const Spider = styled.div<{ animation: boolean }>`
    position: absolute;
    top: 0;
    left: calc(50% - 50px);
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-image: url(${SpiderSVG});
    background-repeat: no-repeat; 
    background-color: transparent;
    background-position: 50% 100%;
    background-size: contain;
    z-index: 1;
    transform: translateY(-195px);

    ${props => props.animation && css`
        animation: ${spiderAnimation} 8s linear 1s forwards; 
    `}

    &::before {
        content: '';
        display: inline-block;
        width: 3px;
        height: calc(100% - 86px);
        background: white;
        border-radius: 30%;
        z-index: -1;
    }   
`

export const SpiderLight = styled.div<{ animation: boolean }>`
    position: absolute;
    top: 0;
    left: calc(50% - 50px);
    display: flex;
    justify-content: center;
    width: 0px;
    height: 0px;
    z-index: -1;
    
    ${props => props.animation && css` 
        animation: ${lightAnimation} 8s linear 1s forwards; 
    `}

    &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        display: inline-block;
        background: ${props => props.theme.color.main};
        border-radius: 50%;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }
`