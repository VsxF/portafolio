import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Ecommerce from "../ecommerce";
import LandingBackground from "../landingpage/landingBackground";
import Profile from "../profile";
import { ProyectFiled, ProyectsContainer, ProyectsFieldContainer, ShowComponent } from "./style";

const Proyects: FC = () => {
    const [selected, setSelected] = useState(0);
    const [t, i18n] = useTranslation('global');

    return (
        <>
            <LandingBackground noWait>
                <ProyectsContainer>
                    <ProyectsFieldContainer>
                        <Link to="ecommerce">
                            <ProyectFiled onMouseEnter={() => setSelected(1)}>
                                {t('proyects.ecommerce')}
                            </ProyectFiled>
                        </Link>
                        <Link to="profile">
                            <ProyectFiled onMouseEnter={() => setSelected(2)}>
                                {t('proyects.profile')}
                            </ProyectFiled>
                        </Link>
                    </ProyectsFieldContainer>

                    <ShowComponent>
                        {/* {selected === 0 && <LandingBackground />} */}
                        {selected === 1 && <Ecommerce />}
                        {selected === 2 && <Profile />}
                    </ShowComponent>

                </ProyectsContainer>
            </LandingBackground>



        </>
    )
}

export default Proyects;