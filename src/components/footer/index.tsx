import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Bubble, Bubbles, FooterContainer, FooterLine, FooterMenu } from "./style";

const Footer: FC = () => {
    const [t, i18] = useTranslation('global');

    const getBubbles = () => {
        let idk: ReactNode[] = [];
        for (let i = 0; i < 100; i++) {
            const left = Math.abs(Math.floor(Math.random() * 10 * i));
            const move = Math.floor(Math.random() * 200 + 50);
            console.log(left)
            idk.push(<Bubble key={i} left={left} mv={move} i={+(i + 1)} />)
        }
        return idk
    }

    return (
        <FooterContainer>
            <FooterMenu>
                <Link to="/">{t('menu.home')}</Link>
                <FooterLine />
                <Link to="/proyects">{t('menu.proyects')}</Link>
                <FooterLine />
                <Link to="/Contact">{t('menu.contact')}</Link>
            </FooterMenu>
            © 2022 sublimexf
        </FooterContainer>

    )
}

export default Footer;