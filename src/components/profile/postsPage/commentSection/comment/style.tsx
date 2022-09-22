import styled from "styled-components";

export const CommentContainer = styled.div<{reply: number}>`
    display: flex;
    direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: ${props => props.reply === 0 ? "0xp" : "20px"};
    margin-left: 0.25em;  
`

export const CommentBar = styled.div<{ reply: number }>`
    width: calc(100%);
    box-sizing: border-box;
    padding: 13px;
    padding-left: 25px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    ${({ reply, theme }) => theme.name === 'Dark' ? `
        background: ${ reply % 2 ?
            theme.color.background2 :
            theme.color.background 
        };
    `:`
    background: ${reply % 2 ?
        theme.color.secondary :
        theme.color.third 
        };
    `}

    h3 {
        transform: translateX(-10px);
        margin-top: 0px;
        margin-bottom: 0px;
        cursor: pointer;
    }
`

export const ResponseContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-weight: bold;
`



