import styled from "styled-components"
import { afterTabsLine } from "../style"

export const ProfileHeaderDiv = styled.div`
    width: 100%;
    height: 335px;
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media only screen and (max-width: 768px) {
        height: 435px;
    }

`

export const ProfileFrontPage = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: #95959533;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;

    height: 240px;

    @media only screen and (max-width: 768px) {
        height: 200px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: auto;
    }

    
`

export const ProfilePicture = styled.div<{ width?: string }>`
    position: absolute;
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    top: 100px;
    left: 75px;
    border: solid 5px white;
    background: ${props => props.theme.color.background};
    overflow: hidden;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

    @media only screen and (max-width: 768px) {
        left: calc(50% - 100px);
    }

    img {
        object-fit: cover;
        width: 100%;
        height: auto;
    }
`

export const ProfileSocialContainer = styled.div`
    width: fit-content;
    position: absolute;
    top: 1em;
    right: 1em;
    display: flex;
    transition: all 2s ease-in-out;
`

export const ProfileSocial = styled.div<{ show: boolean }>`
    display: flex;
    flex-direction: row;
    width: 0px;
    height: 50px;
    opacity: 0;
    border-radius: 0px;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 5px;
    transition: all 1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background: ${props => props.theme.color.background2};

    > * {
        margin-left: 3px;
    }

    svg {
        cursor: pointer;
    }

    ${props => props.show && `
        width: 200px;
        opacity: 1;
        border-radius: 10px;
    `}    
`

export const ProfileHeaderInfo = styled.div`
    display: flex; 
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    padding-left: 300px;
    background: ${props => props.theme.color.background2};
    color: ${props => props.theme.color.font};
    width: 100%;
    height: 125px;

    @media only screen and (max-width: 1400px) {
        height: 100px;
    };
    
    @media only screen and (max-width: 768px) {
        padding-left: 0px;
        padding-top: 135px;
        height: calc(310px + 1.5em);
        align-items: center;

        ${afterTabsLine}

        ::after {
            position: absolute;
            bottom: calc(-66px - 1em);
            left: 10px;
            width: calc(100% - 20px);
        }

        span {
            text-align: center;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
`

export const ProfileTitle = styled.h1`
    font-size: 1.5em;
    margin: 0;
`