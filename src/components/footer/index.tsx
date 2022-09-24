import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FooterContainer, FooterLine, FooterMenu } from "./style";

const Footer: FC = () => {
    const [t] = useTranslation('global');

    return (
        <FooterContainer>
            <FooterMenu>
                <Link to="/" state={'menu'}>{t('menu.home')}</Link>
                <FooterLine />
                <Link to="/proyects">{t('menu.proyects')}</Link>
                <FooterLine />
                <Link to="/contact" state={'ctcmenu'}>{t('menu.contact')}</Link>
            </FooterMenu>
            © 2022 sublimexf
        </FooterContainer>

    )
}

export default Footer;