import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Information from "./infoPage";
import Posts from "./postsPage";
import ProfileHeader from "./profileHeader";
import { ProfileContainer, ContentContainer, TabsContainer, TabItem } from "./style";

const Profile: FC = () => {
    const location = useLocation().pathname.split('/')[3];
    const [t] = useTranslation('global');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) ref.current.scrollIntoView();
    }, [])

    return (
        <ProfileContainer ref={ref}>
            <ProfileHeader />

            <TabsContainer>
                <Link to="/proyects/profile" >
                    <TabItem selected={location === undefined} > {t('postPage.tabs.posts')} </TabItem>
                </Link>
                <Link to="/proyects/profile/information">
                    <TabItem selected={location === 'information'} > {t('postPage.tabs.information')}</TabItem>
                </Link>
                <TabItem selected={location === 'pictures'} unable > {t('postPage.tabs.pictures')}</TabItem>
            </TabsContainer>

            <ContentContainer>
                <Routes>
                    <Route index element={<Posts />} />
                    <Route path="information" element={<Information />} />
                    <Route path="pictures" element={<div>pictures</div>} />
                </Routes>

            </ContentContainer>
        </ProfileContainer>
    )
}

export default Profile;