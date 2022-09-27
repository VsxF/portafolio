import styled, { css } from "styled-components";

export const Column = styled.div<{ width?: string, sticky?: boolean, noneInPhone?: boolean, w100inPhone?: boolean }>`
    display: flex;
    flex-direction: column;
    margin: 2%;

    width: ${ props => props.width };

    @media only screen and (max-width: 768px) {
        display: ${ props => props.noneInPhone ? "none" : "flex" };
        width: ${ props => props.w100inPhone ? "100%" : props.width };
        margin: 1%;
    }

    ${ props => props.sticky && `
        height: 100%;
        position: sticky;
        top: 30px;
    `}
`

export const PostsContainer = styled.div<{ height?: string }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px; 
    margin-bottom: 30px;
    background: ${({theme}) => theme.name === 'Dark' ? theme.color.background2 : theme.color.secondary };
    height: ${ props => props.height };
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    color: ${props => props.theme.color.font};
`

export const PostsTitle = styled.h2`
    margin-top: 0px;
    width: 100%;
    height: fit-content;

    ::after {
        display: block;
        content: '';
        background: ${ props => props.theme.color.lines };
        height: 2px;
        width: 100%;
        margin-top: 5px;
        border-radius: 7px;
    }
`

export const SamplePicture = styled.img`
    width: 100%;
    height: fit-content;
    padding: 3px;
    border-radius: 10px;
`

export const InfoRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`
export const toggleColors = (reply: number) => css`
    ${({ theme }) => theme.name === 'Dark' ? `
        background: ${ reply % 2 ?
            theme.color.background :
            theme.color.background2
    };
    `:`
        background: ${reply % 2 ?
            theme.color.third :
            theme.color.secondary
    };
    `};
`



