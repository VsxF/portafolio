import styled from "styled-components";

export const BackContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        font-size: 1.5em;
        cursor: pointer;
        user-select: none;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 35%;
    align-content: flex-start;
    margin-right: 5%;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0%;
    }
`

export const ItemTitle = styled.h1`
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 40px;
    letter-spacing: 2px;
    color: ${props => props.theme.color.font};
`

export const Price = styled.div`
    font-size: 1.25em;
    margin: 10px;
    color: ${props => props.theme.color.font};
`
export const Cont = styled.div`
    position: relative;
`
