import styled, { keyframes } from "styled-components"

export const BackgroundContainer = styled.div`
    position: absolute;
    top: -95px;
    z-index: -1;
    min-width: 100vw;
    min-height: calc(100vh - 45px);
    display: flex;
    align-items: center;
    justify-content: center;
`

const starsAnimation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(359deg);}
`
interface IProps { 
    vac: string, 
    vacNoSky: string, 
    hypotenuse: number, 
    X: number, 
    Y: number
}

export const Background = styled.div<IProps>`
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100vh - 45px);
    background-image: url(${props => props.vac});
    background-repeat: no-repeat; 
    background-color: transparent;
    background-position: 50% 50%;
    background-size: cover;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: ${props => props.Y}px;
        left: ${props => props.X}px;
    
        width: ${props => props.hypotenuse}px;
        height: ${props => props.hypotenuse}px;
        filter: url(#stars);
        animation: ${starsAnimation} 150s infinite linear;
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: calc(100vh - 45px);
        background-repeat: no-repeat;
        background-image: url(${props => props.vacNoSky});
        background-color: transparent;
        background-position: 50% 50%;
        background-size: cover;
    } 

    @media only screen and (max-width: 768px) {
        background-position: 40%, 40%;
        &::before, &::after {
            background-position: 40%, 40%;   
        }
    }
`

const loadingAnimation = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(359deg);}
`
export const Loading = styled.span`
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    z-index: 9;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.color.font};
    border-top: 4px solid ${props => props.theme.color.background2};
    animation: ${loadingAnimation} 0.1s linear infinite;
`