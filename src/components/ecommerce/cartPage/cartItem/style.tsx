import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;

    a {
        display: flex;
        flex-direction: row;
        width: calc(100% - 180px);
        @media only screen and (max-width: 768px) {
            width: calc(100% - 90px);
        }

        &:hover {
            text-decoration: underline;
        }
    }

   
`

export const CartItemPicture = styled.div<{picture: string}>`
    width: 20%;
    height: auto;
    background-image: url( ${ props => props.picture } );
    transition: all 1s  cubic-bezier(0.18, 0.89, 0.32, 1.28);
    background-size: contain;
    background-repeat:   no-repeat;
    background-position: center center; 

    @media only screen and (max-width: 768px) {
        width: 30%;
    }
`

export const CartItemTitle = styled.div`
    max-width: calc(80% - 10px);
    height: 4em;
    margin: 5px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media only screen and (max-width: 768px) {
        width: calc(70% - 10px);
    }
`

export const QntContainer = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.color.font};

    div {
        color: black;
    }

    @media only screen and (max-width: 768px) {
        width: 90px;
    }
`

export const QntIconsContainer = styled.div`
    width: 100;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const AddQnt = styled.span`
    content: '';
    display: block;
    width: 80%;
    height: 3px;
    background: white;
    border-radius: 20px;
`
