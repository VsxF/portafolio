import styled from "styled-components";

export const SHeader = styled.div`
    width: 100%;
    height: 95px;
    // margin-top: 5%;
    background: ${ props => props.theme.color.main };
    position: sticky;
    top: -1px;
    z-index: 10;  
    // border-top: solid; 
    display: flex;
    // flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
    margin-bottom: 50px;
`

export const StoreTag = styled.h2`
    width: fit-content;
    color: ${ props => props.theme.color.third };
`

export const HalfContainer = styled.div<{ $end?: boolean }>`
    display: flex;
    // justify-content: space-between;
    justify-content: ${ props => props.$end ? "flex-end" : "flex-start" };
    align-items: center;
    flex-direction: row;
    padding-right: 20px;
    width: 33%;
`



