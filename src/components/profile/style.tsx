import styled, { css } from "styled-components";

export const ProfileContainer = styled.div`
    box-sizing: border-box;    
    padding: 5%;
    padding-bottom: 0;
    padding-top: 0px;
    scroll-margin-top: 95px;
`

export const ContentContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    
    width: 100%;
    box-sizing: border-box;
    padding: 30px;

    &::before {
        content: '';
        width: 20px;
        height: 40px;
    }

    @media only screen and (max-width: 768px) {
        padding: 0;
        flex-direction: column;
    }
`

export const afterTabsLine = css`
    ::after {
        content: '';
        background: ${props => props.theme.color.lines};
        width: 100%;
        height: 4.5px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`

export const TabsContainer = styled.div`
    width: calc(100% - 20px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap; 
    margin-top: 40px;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar { display: none; }

    a {
        text-decoration: none;
        color: black;
    }

    ${afterTabsLine}

    @media only screen and (max-width: 768px) {
        flex-wrap: nowrap;
        margin-left: 10px;
        margin-right: 10px;
        ::after { display: none; }
    }

    @media only screen and (max-width: 480px) {
        justify-content: flex-start;
    }
`

export const TabItem = styled.div<{ selected: boolean, unable?: boolean }>`
    position: relative;
    padding: 10px;
    padding-bottom: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 1.25em;
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.color.font};

    &:hover {
        color: ${props => props.theme.color.main}
    }

    ${props => props.unable && `
        &:hover {
            color: ${props.theme.color.lines}
        }
    `}

    ${props => props.selected && `
        color: ${props.theme.color.main};
        &::after {
            content: '';
            display: block;
            position: absolute;
            left: -5px;
            width: calc(100% + 10px);
            height: 5px;
            background: ${props.theme.color.secondary};
            border-radius: 20px;
            transform: translateY(3px);
        }
    `} 
    
    @media only screen and (max-width: 768px) {
        height: calc(1em + 15px);
    }
`

export const TabLine = styled.div`
    height: 100%;
    width: 2px;
    background-clip: content-box;
    background-color: gray;
    padding-left: 20px;
    padding-right: 20px;

`




