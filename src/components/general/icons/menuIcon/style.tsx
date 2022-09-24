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

interface IProps { 
    open: "open" | "close" | "unanimated", 
    one?: boolean
}

export const EndsBar = styled.g<IProps>`
    * { fill: ${props => props.theme.color.font}; }    

    ${props => props.open === "open" ? css`
            animation: ${endsAnimation(props.one as boolean)} 0.3s 1 0s forwards;
        `: props.open === "close" ? css`
            animation: ${endsRevert(props.one as boolean)} 0.3s 1 0s forwards;
        ` : ``
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
export const MidsBar = styled.g<IProps>`
    * { fill: ${props => props.theme.color.font}; }      

    ${props => props.open === "open" ? css`
        animation: ${crossAnimation(props.one as boolean)} 0.3s 1 0.3s forwards;
    `: props.open === "close" ? css`
        animation: ${crossRevert(props.one as boolean)} 0.3s 1 0s forwards;
    `: ``
    }
`