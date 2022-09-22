import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 45px;
    background: ${props => props.theme.color.main};
    color: ${props => props.theme.color.font};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    
    border-radius: 0px;

    // @media only screen and (min-width: 480px) {
    //     position: absolute;
    //     bottom: 0;
    // }

    
}
`

export const FooterMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    a {
        box-sizing: border-box;
        padding: 7px;
    }
`

export const FooterLine = styled.span`
    background: gray;
    border-radius: 30px;
    width: 3px;
    height: 35px;
`


export const Bubbles = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    filter: url('#gooey');
`

const move = (mv: number) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    99% {
        transform: translate(0, -${mv}px);
    }
    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
`

export const Bubble = styled.span<{ left: number, i: number, mv: number}>`
    background: ${ props => props.theme.color.main };
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 0;

    &:nth-child(${props => props.i}){ 
        left: ${ props => props.left}%;
        width: 5vh;
        height: 5vh;
        animation: ${ props => move(props.mv)} ${ props => 3 + props.i * 0.02 }s infinite;
        animation-delay: ${ props => props.i * 0.2 }s;
    }
`
