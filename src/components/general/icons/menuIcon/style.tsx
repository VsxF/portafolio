import styled, { css, keyframes } from "styled-components";

export const MenuSVG = styled.svg`
    width: 100%;
    height: 100%;
`
const endsAnimation = (top: boolean) => keyframes`
    0% {
        transform-origin: center;
    }
    100% {
        transform: translateY(${!top && "-"}40%);
        visibility: hidden;
    }
}
`
const endsRevert = (top: boolean) => keyframes` 
    0% {
        visibility: visible;
        opacity: 0;
        transform-origin: center;
        transform: translateY(${!top && "-"}40%);
    }

    55% {
        visibility: visible;
        opacity: 0;
        transform-origin: center;
        transform: translateY(${!top && "-"}40%);
    }

    100% {        
        transform: translateY(0%);
    }
`
export const EndsBar = styled.g<{ open: boolean, firstUpdate: boolean, top: boolean }>`
    * { fill: ${props => props.theme.color.font}; }    

    ${props => props.firstUpdate &&
        props.open ? css`
            animation: ${endsAnimation(props.top)} 0.3s 1 0s forwards;
        `: css`
            animation: ${endsRevert(props.top)} 0.3s 1 0s forwards;
        `
    }
`
const crossAnimation = (mid2: boolean) => keyframes`
    0% {
        transform-origin: center;
    }

    100% {
        transform-origin: center;
        transform: rotate(${mid2 && "-"}45deg);
    }
`
const crossRevert = (mid2: boolean) => keyframes`
    0% {
        transform-origin: center;
        transform: rotate(${mid2 && "-"}45deg);
    }

    100% {
        transform-origin: center;
        transform: rotate(0deg);
    }
`
export const MidsBar = styled.g<{ open: boolean, firstUpdate: boolean, mid2: boolean }>`
    * { fill: ${props => props.theme.color.font}; }      

    ${props => props.firstUpdate &&
    props.open ? css`
        animation: ${crossAnimation(props.mid2)} 0.3s 1 0.3s forwards;
    `: css`
        animation: ${crossRevert(props.mid2)} 0.3s 1 0s forwards;
    `
    }
`