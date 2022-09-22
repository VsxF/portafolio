import styled from "styled-components";

export const Bar = styled.div<{ width?: string, center?: boolean }>`
    display: flex;
    flex-direction: row;
    // margin-bottom: 40px;
    justify-content: ${props => props.center ? "center" : "space-between"};
    align-items: center;
    // align-self: center;
    // flex-wrap: wrap;
    width: ${props => props.width ? props.width : "100%"};
    color: ${props => props.theme.color.font};
    fill: ${props => props.theme.color.font};

    a {
        width: calc(100% - 180px);
        @media only screen and (max-width: 768px) {
            width: calc(100% - 90px);
        }
    }
`

export const ItemTitle = styled.h2`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.color.font};
    text-align: center;
`

export const LeftColumn = styled.h2`
    width: 180px;
    display: flex;
    justify-content: flex-end;
    justify-content: center;
    color: ${props => props.theme.color.font};

    @media only screen and (max-width: 768px) {
        min-width: 90px;
    }
`

export const CheckoutWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% + 20px);
    background: #808080a6;
    z-index: 999;

    @media only screen and (max-width: 768px) {
        height: calc(100% + 20px);
    }
`

export const CheckoutContent = styled.div`
    background: ${props => props.theme.color.background2};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;
    height: 30%;
    border-radius: 30px;
    font-size: 1.5em;
    box-sizing: border-box;
    padding: 20px;
    color: ${props => props.theme.color.font};
    box-shadow: rgb(0 0 0 / 9%) 0px 2px 1px, 
                rgb(0 0 0 / 9%) 0px 4px 2px, 
                rgb(0 0 0 / 9%) 0px 8px 4px, 
                rgb(0 0 0 / 9%) 0px 16px 8px, 
                rgb(0 0 0 / 9%) 0px 32px 16px;

    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`

