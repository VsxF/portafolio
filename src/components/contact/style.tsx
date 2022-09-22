import styled from "styled-components";

export const ContactContainer = styled.div`
    position: absolute;
    top: calc(100vh - 140px);
    top: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    width: 100%;
    // height: 95%;
    min-height: calc(100vh - 140px);
    z-index: 2;

    * { color: ${props => props.theme.color.font}; }

    h1, h2 {
        color: #fff;
        width: 100%;
        text-align: center;
        margin: 0;
        @media only screen and (max-width: 768px) {
            margin-top: 40px; 
        }
    }

    h1 {
        font-family: lobster;
        font-size: 4em;
    }
`

export const Column = styled.div<{ description?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px, 
                rgba(0, 0, 0, 0.12) 0px 4px 6px, 
                rgba(0, 0, 0, 0.17) 0px 12px 13px, 
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
    box-sizing: border-box;
    margin: 40px;
    padding: 30px;
    border-radius: 30px;
    background: ${props => props.theme.color.background2};
    width: calc(40% - 80px);
    

    ${props => props.description && `
        width: calc(60% - 80px);
        margin-left: 20%;
        margin-right: 20%;
    `}

    @media only screen and (max-width: 768px) {
        width: calc(100% - 80px);
        margin: 40px;
        margin-bottom: 0px;
    }

    p {
        font-size: 1.5em;
        font-weight: bold;
        text-shadow: 1px 1px 20px;
        text-align: center;
    }

    a {
        display: flex;
        align-items: center;
    }
`

export const ColumnList = styled(Column)`
    align-items: center;
    margin-bottom: 60px;
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @media only screen and (max-width: 768px) {
        &:nth-child(5) { margin-bottom: 0px; }
        &:nth-child(6) { margin-bottom: 80px; }
    }
`

export const IconNtext = styled.div<{ pointer?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    // min-width: 50%;
    margin-bottom: 20px;

    ${props => props.pointer && `
        cursor: pointer;
    `}

    svg {
        max-height: 30px;
        min-width: 40px;
        margin-right: 20px;
        fill: ${props => props.theme.color.font};
    }
`

export const SayContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }

`

export const Copied = styled.span<{ show: boolean }>`
    position: absolute;
    top: -3em;
    left: calc(50% - 2.5em);
    width: 5em;
    text-align: center;
    padding: 7px;
    border-radius: 10px;
    background: #80808069;
    transition: all 1s linear;
    opacity: 0;
    transform: translateY(40px);

    @media only screen and (max-width: 950px) {
        left: calc(100% - 5em);
    }
    
    ${props => props.show && `
        opacity: 1;
        transform: translateY(0px);
    `};
`


