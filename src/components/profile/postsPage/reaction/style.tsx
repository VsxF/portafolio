import styled from "styled-components"
import { toggleColors } from "../style"

export const ReactionSectionContainer = styled.div<{ line?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    // margin-top: 10px;

    ${props => props.line && `
        ::before {
            content: '';
            width: 90%;
            margin-top: 1%;
            margin-left: 5%;
            margin-right: 5%;
            height: 3px;
            background: ${props.theme.color.lines};
            border-radius: 20px;
        }
    `}
`

export const ReactionField = styled.span<{ active?: boolean, show?: boolean, reply: number }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 6px;
    width: auto;
    height: 1.5em;
    cursor: pointer;
    border-radius: 10px;
    padding: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    min-width: auto;

    svg {
        box-sizing: border-box;
        padding: 3px;
        // padding-top: 0px;
        min-width: 35px;
        fill: ${({ theme }) => theme.color.font};
    }

    &:hover {
        background: #00000024;
    }

    ${({reply, show, active}) => (show || active) && toggleColors(reply)}}
    :nth-child(1) {
        ${({reply, show, active}) => (show || active) && toggleColors(reply === 0 ? 1 : reply)}}
    }
    

    ${({ show }) => show && `
        margin-bottom: -6px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        &:hover {   
            border-radius: 10px;
        }
    `}    
`

// (reply % 2 ? `
//                 background: ${theme.color.third};
//             `: `
//                 background: ${theme.color.secondary};
//         `)

export const Reactions = styled.div<{ open?: boolean }>`
    position: absolute;
    display: ${props => props.open ? "flex" : "none"};
    flex-direction: row;
    top: -3em;
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background: ${({ theme }) => theme.name === 'Dark' ? theme.color.background : theme.color.main};
    box-sizing: border-box;
    padding: 7px;
    padding-bottom: 7px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.4) 2px 2px 4px,
                rgba(0, 0, 0, 0.3) 7px 7px 13px -3px,
                rgba(0, 0, 0, 0.2) -3px -3px 0px inset;

    svg { fill: ${({ theme, }) => theme.color.font}; }

    svg:hover {
        width: 120 % !important;
        height: 120 % !important;
        padding: 4px;
        cursor: pointer;
    }
`