import styled from "styled-components";

export const ProyectsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 10;

`

export const ProyectsFieldContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 300px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;

    background: ${props => props.theme.color.background2};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, 
                rgba(0, 0, 0, 0.12) 0px -12px 30px, 
                rgba(0, 0, 0, 0.12) 0px 4px 6px, 
                rgba(0, 0, 0, 0.17) 0px 12px 13px 10px, 
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
    z-index: 2;

    @media only screen and (max-width: 768px) {
        width: 70%;
    }
`

export const ProyectFiled = styled.h2`
    cursor: pointer;
    color: ${ props => props.theme.color.font };
    margin: 15px;
    

    &:hover {
        color: ${ props => props.theme.color.main };
        text-decoration: underline;
        text-decoration-style: wavy;
    }
`

export const ShowComponent = styled.div`
    z-index: -999;
    min-width: 100%;
    height: calc(100vh - 140px);
    // min-height: calc(100vh - 140px);
    overflow: hidden;
    filter: blur(5px);

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        // background: red;
        width: 100%;
        height: 50vh;
        z-index: 100;
        height: calc(100vh - 140px);
    }
`