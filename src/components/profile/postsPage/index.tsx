import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SamplePictures, SamplePost, SampleProfilePicture } from "../sampelData";
import Post from "./post";
import { Column, InfoRow, PostsContainer, PostsTitle, SamplePicture } from "./style";

const Posts:FC = () => {
    const [t] = useTranslation('global');

    return (
        <>
            <Column width="40%" sticky noneInPhone>
                <PostsContainer >
                    <PostsTitle>  {t('postPage.tabs.information')} </PostsTitle>
                    <InfoRow>
                        <b>{t('postPage.information.birthday', { returnObjects: true })[0]}:</b>
                        {t('postPage.information.birthday', { returnObjects: true })[1]}
                    </InfoRow>
                    <InfoRow>
                        <b>{t('postPage.information.gender', { returnObjects: true })[0]}:</b>
                        {t('postPage.information.gender', { returnObjects: true })[1]}
                    </InfoRow>
                    <InfoRow>
                        <b>{t('postPage.information.mobile', { returnObjects: true })[0]}:</b>
                        {t('postPage.information.mobile', { returnObjects: true })[1]}
                    </InfoRow>
                    <InfoRow>
                        <b>{t('postPage.information.sign', { returnObjects: true })[0]}:</b>
                        {t('postPage.information.sign', { returnObjects: true })[1]}
                    </InfoRow>

                </PostsContainer>

                <PostsContainer>
                    <PostsTitle> {t('postPage.tabs.pictures')} </PostsTitle>
                    <Column width="46%">
                        <SamplePicture src={SamplePictures[1]} />
                        <SamplePicture src={SamplePictures[0]} />

                    </Column>

                    <Column width="46%">
                        <SamplePicture src={SamplePictures[2]} />
                        <SamplePicture src={SamplePictures[3]} />
                    </Column>
                </PostsContainer>


            </Column>

            <Column width="52%" w100inPhone>
                { SamplePost.content.map((content, index) => 
                    <PostsContainer key={index}>
                        <Post
                            profilePicture={SampleProfilePicture}
                            name={t('postPage.information.name', { returnObjects: true })[1]}
                            date={t('postPage.post.postDates', { returnObjects: true })[index]}
                            content={content}
                            picture={SamplePost.pictures[index]}
                            reacts={SamplePost.reacts[index]}
                        />
                    </PostsContainer>
                ) }
                
            </Column>

        </>
    )
}

export default Posts;