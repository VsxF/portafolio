import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import IconContainer from "../../general/icons/iconContainer";
import { Arrow } from "../../general/icons/icons";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../../general/icons/socialMedia";
import { SamplePortrait, SampleProfilePicture } from "../sampelData";
import { ProfileSocial, ProfileFrontPage, ProfilePicture, ProfileHeaderInfo, ProfileSocialContainer, ProfileHeaderDiv, ProfileTitle } from "./style";

const ProfileHeader: FC = () => {
    const [showSocial, setShowSocial] = useState(false);
    const [t] = useTranslation('global');

    return (
        <ProfileHeaderDiv>
            <ProfileFrontPage>
                <img src={SamplePortrait} alt="profile portrait" />
            </ProfileFrontPage>
            <ProfileSocialContainer>
                    <ProfileSocial show={showSocial} >
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Youtube />
                        <Linkedin />

                    </ProfileSocial>

                    <IconContainer 
                        width="45px" 
                        padding="0px" 
                        color="background"
                        shadow 
                        onClick={() => setShowSocial(!showSocial)}
                    >
                        <Arrow dir="left" rotate={showSocial} />
                    </IconContainer>

                </ProfileSocialContainer>
            <ProfilePicture>
                <img src={SampleProfilePicture} alt="profile" />
            </ProfilePicture>
            <ProfileHeaderInfo>
                <ProfileTitle>{t('postPage.information.name', { returnObjects: true })[1]}</ProfileTitle>
                <span>{ t('postPage.information.status', { returnObjects: true })[1] }</span>

            </ProfileHeaderInfo>
        </ProfileHeaderDiv>
    )
}

export default ProfileHeader;