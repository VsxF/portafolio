import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import CommentSection from "../commentSection";
import Reaction from "../reaction";
import { PostName, PostPicture, PostProfilePicture, TopPost, PostText, ShowMore } from "./style";

interface IProps {
    profilePicture: string,
    name: string,
    date: string,
    content: string,
    picture: string,
    reacts: number,
}

const Post: FC<IProps> = ({ profilePicture, name, date, content, picture, reacts }) => {
    const [showMore, setShowMore] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [t, i18] = useTranslation('global');

    return (
        <>
            <TopPost>
                <PostProfilePicture 
                src={profilePicture} 
                alt="profile picture" 
            />
                <PostName>
                    <h3>{name}</h3>
                    <span> {date} </span>
                </PostName>
            </TopPost>

            <PostText show={showMore}>{content}</PostText>

            <ShowMore 
                onClick={() => setShowMore(!showMore)}
            >
                {!showMore ? "... " + t('postPage.post.show_more') : t('postPage.post.show_less')}
            </ShowMore>

            <PostPicture src={picture} alt={"post picture"} />

            <Reaction
                showComments={() => setShowComments(!showComments)} 
                show={showComments}
                reacts={reacts}
                reply={0}
            />

            <CommentSection show={showComments} reply={0} />
        </>
    )
}

export default Post;