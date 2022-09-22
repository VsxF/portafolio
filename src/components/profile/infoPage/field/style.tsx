import styled, { css } from "styled-components";

export const FieldContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 80%;
    height: calc(40px + 1em);
    margin: 20px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
    }
`

const onTop = css`
    top: 0;
    font-size: 0.95em;
    color: ${props => props.theme.color.font};
    text-shadow: 3px 4px 7px #000000a8;

    font-weight: bold;
`

export const FieldLabel = styled.label<{ keepOnTop?: boolean}>`
    position: absolute;
    top: calc(100% - 30px);
    z-index: -1;
    color: ${props => props.theme.color.lines};
    transition: all 0.5s ease-in-out;

    ${props => props.keepOnTop && onTop};
`

export const FieldInput = styled.input<{ empty?: boolean }>`
    width: 100%;
    height: 40px;
    border: none;
    color: ${props => props.theme.color.font};
    border-bottom: solid 2px ${({empty, theme}) => empty ? "#cc0000" : theme.color.lines};

    background: transparent;
    outline: none;
    font-size: 1em;
    
    &:focus ~ {
        ${FieldLabel} {
            ${ onTop };
        }
    } 

`

