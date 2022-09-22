import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 140px;
    margin-top: 40px;
    transition: all 0s ease-in-out;
    font-weight: bold;
`

export const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 30px;
    border-radius:10px;
    padding: 20px;
    padding-bottom: 26px;
    margin: -3px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    
    background: ${ props => props.theme.color.secondary };

    &:nth-child(1) {
        z-index: 4;
    }

    &:nth-child(3) {
        z-index: 3;
    }

    &:nth-child(5) {
        z-index: 2;
    }

    &:nth-child(7) {
        z-index: 1;
    }
`

export const SectionDetails = styled.div<{open: boolean}>`
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
    heigth: auto;
    box-sizing: border-box;
    background: ${ props => props.theme.color.background2 };
    max-height: 0px;
    padding: 0px;
    opacity: 0;
    justify-content: space-between;
    text-align-last: end; 
    z-index: -1;
    filter: drop-shadow(2px 4px 6px black);
    transition: all 0.5s ease-in-out, opacity 1ms 250ms;
    font-weight: normal;
    color: ${props => props.theme.color.font};

    ${props => props.open && `
        max-height: 1000px;
        padding: 15px;
        opacity: 1;
    `}
`

export const Plus = styled.span<{ less?: boolean }>`
    content: '';
    display: block;
    width: 30px;
    height: 5px;
    background: black;
    position: relative;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;

    &::after, 
    &::before {
        position: absolute;
        top: 0;
        content: '';
        display: block;
        width: 30px;
        height: 5px;
        background: black;
        transform: rotate(90deg);
        transition: all 0.5s ease-in-out;
        border-radius: 30px;
    }

    &::before {
        transform: rotate(-90deg);
    }


    ${ props => props.less && `
        transform: rotate(180deg); 
        &::after {
            transform: rotate(0deg); 
        }

        &::before {
            transform: rotate(0deg); 
        }
    `}
`


