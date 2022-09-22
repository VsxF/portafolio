import { FC, useState } from "react";
import { ClousedMenu, OpenMenu, Ul } from "./style";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import IconContainer, { IconPadding } from "../icons/iconContainer";
import MenuIcon from "../icons/menuIcon";
import useOutsideClick from "../../../hooks/useOutSideClick";

const Menu: FC = () => {
    const [menuSt, setMenuState] = useState(false)
    const [t] = useTranslation('global');
    const outSideClick = useOutsideClick(() => setMenuState(false))

    return (
        <>
            <ClousedMenu>
                <IconPadding>
                    <IconContainer
                        padding="13px"
                        ref={outSideClick} 
                        onClick={() => setMenuState(!menuSt)}
                    >
                        <MenuIcon open={menuSt} />
                    </IconContainer>
                </IconPadding>
            </ClousedMenu>

            <OpenMenu open={menuSt} >
                <Ul open={menuSt} >
                    <li>
                        <Link to="/" state={'menu'}>
                            {t('menu.home')}
                        </Link>
                    </li>
                    <li>
                        <Link to="/proyects">
                            {t('menu.proyects')}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" state={'ctcmenu'}>
                            {t('menu.contact')}
                        </Link>
                    </li>
                </Ul>

            </OpenMenu>
        </>
    )
}

export default Menu;