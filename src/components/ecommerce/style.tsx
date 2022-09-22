import styled from "styled-components";

export const Title = styled.h1`
    width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
    color: ${props => props.theme.color.font};
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    height: 100%;
    scroll-margin-top: 145px;

    @media only screen and (max-width: 1350px) {
        
    }
  
    @media only screen and (max-width: 768px) {

    }
  
    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`