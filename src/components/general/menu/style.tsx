import styled from "styled-components";

export const FlexIcon = styled.div`
    display: flex;
    height: 95px;
    align-items: center;
`

export const ClousedMenu = styled.div`
    display: flex;
    height: 95px;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    visibility: visible;
    pointer-events: none;
`

export const OpenMenu = styled.div<{ open?: boolean }>`
    display: flex;
    align-items: flex-start;
    position: fixed;    
    background: ${props => props.theme.color.third};
    border-bottom-right-radius: 90%;
    z-index: 998;
    left: 0;
    top: 0;
    width: 0px;
    height: 0px;
    transition: width 0.3s, height 0.3s;
    transform-origin: 100% 0%;
    box-sizing: border-box;  

    ${props => props.open && `
        width: 400px;
        height: 400px;
        padding-top: 60px;
        padding-left: 50px;

        @media only screen and (max-width: 768px) {
            width: 350px;
            height: 350px;
        }

        // @media only screen and (max-width: 480px) {
        //     width: 300px;
        //     height: 300px;
        //     padding-top: 30px; 
        //     padding-left: 40px; 
        // }
    `}  
`

export const Ul = styled.ul<{ open?: boolean }>`
    list-style-type: none;
    font-size: 35px;
    letter-spacing: 1px;
    line-height: 50px;
    visibility: ${props => props.open ? "visible" : "hidden"};

    a:hover {
        font-size: 120%;
    }

`

