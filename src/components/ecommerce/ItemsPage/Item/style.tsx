import styled, { css, keyframes } from "styled-components";

export const Box = styled.div`
    height: 460px;
    position: relative;
    border-radius: 10px;
    background: ${props => props.theme.id === "002" ? 
                        props.theme.color.background2 :
                        props.theme.color.secondary}; 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin:20px;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;

    width: 20%;

    @media only screen and (max-width: 1350px) {
        width: 25% ;
    }
  
    @media only screen and (max-width: 768px) {
        width: 40%;
    }
  
    @media only screen and (max-width: 480px) {
        width: 90%;
        margin: 5%;
    }

    &:hover {
        margin-top: 10px;
        margin-left: 25px;
        @media only screen and (max-width: 768px) {
            margin: 20px;
        }
    }
`

const loadingAnimation = keyframes`
    0%{background-position:0% 53%}
    50%{background-position:100% 48%}
    100%{background-position:0% 53%}
`
const loading = (gray: string, other: string) => css`
    background: linear-gradient(45deg, ${gray}, ${other}, transparent);
    background-size: 600% 600%;
    animation: ${loadingAnimation} 2s ease infinite; 
`

export const PictureBox = styled.div<{ $loading?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    border-radius: 10px;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: calc(100% + 20px);
        height: calc(100% + 10px);
        position: absolute;
        bottom: 0;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    ${({$loading, theme}) => $loading && css`
        width: calc(100% + 20px);
        height: calc(60% + 20px);
        transform: translate(-10px, -10px);
        ${loading(theme.name === 'Dark' ? 
            theme.color.background2 :
            theme.color.lines, 
            theme.color.third)}
        
        &::after {
            display: none;
        }
    `}
    
`

export const LoadingSpan = styled.span`
    content: '';
    display: block;
    height: 100%;
    width 100%;
    border-radius: 20px;
    margin-bottom: 10px;
    ${props => loading(props.theme.color.lines, props.theme.color.third)}
`

export const Picture = styled.img<{ show?: boolean }>`
    position: absolute;
    width: auto;
    height: auto;
    border-radius: 10px;
    transition: all 0.75s linear;
    max-width: 100%;
    max-height: 95%;
    object-fit: cover;
    opacity: 1;

    ${props => props.show ? `
        opacity: 1;
        transform: translateX(0%);
        filter: blur(0px);
    `:`
        transform: translateX(10px);
        filter: blur(2px);
        z-index: -99;
    `}  
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    height: 35%;
    margin: 5%;
    margin-bottom: 0px;
    
    // * { color: black; }
`

export const Title = styled.h3<{ $loading?: boolean }>`
    width: 100%;
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;

    ${props => props.$loading && `
        margin: 0;
    `}
`

export const Price = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end; 
    width: 50%;
    height: inherit;
    font-size: 1.5em;
`
export const CartOver = styled.div`
    margin: 10px;
    position: absolute;
    right: 0;
    top: 40%;
    z-index: 1;
`