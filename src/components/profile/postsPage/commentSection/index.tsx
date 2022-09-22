import { FC, useState } from "react";
import styled from "styled-components";
import { SampleComment } from "../../sampelData";
import { Column, toggleColors } from "../style";
import Comment from "./comment";
import CommentWriter from "./commentWriter";

const CommentSection: FC<{ show: boolean, reply: number }> = ({ show, reply }) => {
    const [comments, setComments] = useState(reply === 0 ? SampleComment : []);

    const addComment = (newCom: string) => {
        setComments(comments => [...comments, newCom])
    }

    return (
        <CommentSectionContainer show={show} reply={reply}>
            {comments.map((comment, key) =>
                <Comment comment={comment} key={key} reply={reply} />
            )}
            <CommentWriter addComment={addComment} />
        </CommentSectionContainer>
    )
}

const CommentSectionContainer = styled.div<{ show: boolean, reply: number }>`
    position: relative;
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    border-radius: 10px;

    ${props => toggleColors(props.reply)}

    ${props => props.reply > 0 ? `
        transform: translateX(-30px);
        width: calc(100% + 30px);
    `:`
        margin: 0;
    `}

    &::before {
        content: '';
        position: absolute;
        top: 2.5em;
        left: -10px;
        display: block;
        width: 3px;
        height: calc(100% - 3em);
        border-radius: 30px;
        background ${props => props.theme.color.lines};
    }
`

export default CommentSection;