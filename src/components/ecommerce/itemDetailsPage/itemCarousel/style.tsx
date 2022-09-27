import styled, { css, keyframes } from "styled-components"

export const ItemPicture = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5%;

    height: 480px;
    width: 50%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background: ${props => props.theme.color.background2};
    // transition: all 1s  cubic-bezier(0.18, 0.89, 0.32, 1.28);
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        width: 90%;
        height: 340px;
    }
`
export const ArrowContainer = styled.div<{ left?: boolean }>`
    position: absolute;
    left: ${props => props.left ? "0" : ""};
    right: ${props => props.left ? "" : "0"};
    justify-content: ${props => props.left ? "flex-start" : "flex-end"};
    z-index: 5;

    width: 50%;
    height: 100%;
    border-radius: 20px;

    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    &:hover {
        background: linear-gradient(${props => props.left ? "to right" : "to left"}, 
        rgb(128 128 128 / 50%), transparent);
    }

    @media only screen and (max-width: 768px) {
        &:hover {
            background: transparent;
        }
        &:active {
            background: linear-gradient(${props => props.left ? "to right" : "to left"}, 
            rgb(128 128 128 / 50%), transparent);
        }
    }
`

const next = keyframes`
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
`

const nextEnter = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
`

const prev = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(0%); }
`

const prevEnter = keyframes`
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
`


export const Picture = styled.img<{ show: boolean, next?: boolean }>`
    position: absolute;
    width: auto;
    height: auto;
    border-radius: 5px;
    transition: all 1s ease-in-out;
    max-width: 95%;
    max-height: 95%;
    object-fit: cover;


    ${props => props.show ?
        (props.next ? css`
            opacity: 1;
            filter: blur(0px);
            animation: ${next} 1s forwards;
        `: css`
            opacity: 1;
            filter: blur(0px);
            animation: ${prev} 1s forwards;
        `)
        :
        (props.next ? css`
            opacity: 0;
            filter: blur(2px);
            animation: ${nextEnter} 1s forwards;
        `: css`
            opacity: 0;
            filter: blur(2px);
            animation: ${prevEnter} 1s forwards;
        `)} 
`

export const Example = styled.div`
    position: absolute;
    bottom: 20px;
    color: yellow;
    font-size: 3em;
    background: black;
`
