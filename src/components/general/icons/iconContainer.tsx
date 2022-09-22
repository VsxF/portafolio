import styled, { CSSProperties } from "styled-components";

const IconContainer2 = styled.div`
    display: flex;
    justify-content: center;   
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: green;
`
interface IProps {
    color?: string,
    width?: string,
    padding?: string,
    shadow?: boolean,
    cartNumber?: boolean,
    noBorder?: boolean
}

export const IconContainer = styled.div<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;   
    position: relative;
    padding: ${props => props.padding ? props.padding : "10px"};    
    background: ${props => props.color === "background" ? 
                            props.theme.color.background2 :
                            props.color ? props.color :
                            props.theme.color.third};
    border-radius: 50%;
    width: ${props => props.width ? props.width : "35px"};
    height: ${props => props.width ? props.width : "37px"};
    cursor: pointer;
    pointer-events: auto;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    border: solid 2px ${props =>props.theme.color.background2};
    ${props => props.noBorder && `
        border: none;
        margin: 2px;
    `}
    
    box-shadow: ${props => props.shadow && `
        rgba(0, 0, 0, 0.4) 2px 2px 4px, 
        rgba(0, 0, 0, 0.3) 7px 7px 13px -3px, 
        rgba(0, 0, 0, 0.2) -3px -3px 0px inset;
    `};

    ${props => props.cartNumber && `
        position: absolute; 
        bottom: -5px;
        right: -5px;
        border: none;
        background: ${props.theme.color.secondary};
        color: black;
    `};


    // @media only screen and (max-width: 1350px) {
    //     width: 4vw;
    //     height: 4vw;
    // }
    
    // @media only screen and (max-width: 768px) {
    //     width: 6vw;
    //     height: 6vw;
    // }
    
    // @media only screen and (max-width: 480px) {
    //     width: 8vw;
    //     height: 8vw;
    // }
    @media screen {
        
    }
    * {
        color: black;
    }
    
`

export const IconPadding = styled.div`
    padding: 10px;
    padding-left: 15px;
`

export default IconContainer;