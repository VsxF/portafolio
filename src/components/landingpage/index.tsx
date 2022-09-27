import { FC, useCallback, useEffect, useRef, useState } from "react";
import { LandingText, PictureContainer, Spider, LandingContainer, SpiderLight, AuxLandingScroll, ScrollDown, ScrollDownContainer } from "./style";
import Me from "../general/icons/landingAssets/me.jpg"
import { useTranslation } from "react-i18next";
import LandingBackground from "./landingBackground";
import Contact from "../contact";
import { useLocation, useNavigate } from "react-router-dom";
import { Space } from "../general/icons/icons";

const LandingPage: FC = () => {
    const [animation, setAnimation] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [t] = useTranslation('global');
    const refScrollDiv = useRef<HTMLDivElement>(null);
    const rootChildren: any = (document.getElementById('root') as HTMLElement).children
    const defualtHeader = useCallback(() => {
        rootChildren[2].style.removeProperty("display")
        rootChildren[3].style.removeProperty("min-height")
        rootChildren[3].children[0].style.removeProperty('top')
        rootChildren[3].children[1].style.removeProperty('top')
    }, [rootChildren]); // default header style

    // unmount -> clean header changes
    useEffect(() => { return defualtHeader }, [rootChildren, defualtHeader])

    useEffect(() => {
        // Navigate to index section, when it comes from the contact Section
        // (Contact section) -> Menu -> (Index section)
        if (location.state === "menu" && refScrollDiv.current) {
            refScrollDiv.current.scrollTop = 0;
            setAnimation(false);
            setTimeout(() => setAnimation(true), 1);
            defualtHeader()
        }

        if (location.pathname === "/contact") setAnimation(false);
    }, [location, defualtHeader])

    // onScoll show / dir to contact section
    const handleScroll = (e: any) => {
        if (e.currentTarget.scrollTop > 1) {
            if (location.pathname !== '/contact') {
                navigate('/contact', { state: "fromScroll" });
                setAnimation(false);
            }
        } else {
            if (location.pathname !== "/") {
                navigate("/")
                defualtHeader();
            }
        }
    }

    return (
        <LandingBackground loadPic={Me}>
            <LandingContainer >
                <AuxLandingScroll
                    onScroll={handleScroll}
                    animation={animation}
                    ref={refScrollDiv}
                >
                    <Spider animation={animation} />
                    <SpiderLight animation={animation} />

                    <LandingText animation={animation} >
                        {t('landing.greeting')}
                        <br />
                        Herberth
                        <PictureContainer picture={Me} />

                        {location.pathname !== "/contact" &&
                            <ScrollDownContainer>
                                <ScrollDown />
                            </ScrollDownContainer>
                        }

                        <Space width="100%" height="calc(80vh - 50px)" />
                    </LandingText>

                    <Contact animationOff={animation} fixHeader={() => { }} />
                </AuxLandingScroll>
            </LandingContainer>
        </LandingBackground>
    )
}

export default LandingPage;