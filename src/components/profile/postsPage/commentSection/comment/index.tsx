import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import CommentSection from "..";
import { SampleProfilePicture } from "../../../sampelData";
import { PostProfilePicture } from "../../post/style";
import Reaction from "../../reaction";
import { Column } from "../../style";
import { CommentContainer, CommentBar } from "./style";

const Comment: FC<{ comment: string, reply: number }> = ({ comment, reply }) => {
    const [showReply, setShowReply] = useState(false);
    const [t, i18] = useTranslation('global');

    return (
        <CommentContainer reply={reply}>
            <PostProfilePicture 
                src={SampleProfilePicture} 
                width="3em"
            />
            <Column width="calc(98% - 4.5em)">
                <CommentBar reply={reply}>
                    <h3>{t('postPage.information.name', { returnObjects: true })[1]}</h3>
                    {comment}
                </CommentBar>
                <Reaction
                    showComments={() => setShowReply(!showReply)}
                    show={showReply}
                    reacts={0}
                    reply={reply + 1}
                />
                <CommentSection
                    show={showReply}
                    reply={reply + 1}
                />
            </Column>
        </CommentContainer>
    )
}

export default Comment;