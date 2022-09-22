import styled from "styled-components"

export const CommentWriterContainer = styled.div`
    display: flex;
    width: 100%;
    transform: translateY(5px);
    // border: solid 1px black;
    background: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, 
                rgba(0, 0, 0, 0.09) 0px 4px 2px, 
                rgba(0, 0, 0, 0.09) 0px 8px 4px, 
                rgba(0, 0, 0, 0.09) 0px 16px 8px, 
                rgba(0, 0, 0, 0.09) 0px 32px 16px;
`

export const CommentInput = styled.input.attrs({
    type: 'text',
})`
    border: none;
    width: calc(100% - 6em);
    padding-left: 20px;

    &:focus-visible {
        outline: none;
    }
`