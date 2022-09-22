import { FC, useEffect, useRef, useState } from "react";
import { LandingText, PictureContainer, Spider, LandingContainer, SpiderLight, AuxLandingScroll } from "./style";
import Me from "../general/icons/landingAssets/me.jpg"
import { useTranslation } from "react-i18next";
import LandingBackground from "./landingBackground";
import Contact from "../contact";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Space } from "../general/icons/icons";

const LandingPage: FC = () => {
    const [animation, setAnimation] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [t] = useTranslation('global');
    const refScrollDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Navigate to index section, when it comes from the contact Section
        // (Contact section) -> Menu -> (Index section)
        console.log("simon")
        if (location.state === "menu" && refScrollDiv.current) {
            refScrollDiv.current.scrollTop = 0;
            location.state = "a";
            setAnimation(false);
            setTimeout(() => setAnimation(true), 1);
        }
    }, [location.state]) // eslint-disable-line react-hooks/exhaustive-deps

    // onScoll show / dir to contact section
    const handleScroll = (e: any) => {
        if (e.currentTarget.scrollTop > 60) {
            if (location.pathname !== '/contact') navigate('/contact')
        } else {
            if (location.pathname !== "/") navigate("/")
        }
    }

    // const youtubexd = () => {

        // const btn = document.createElement("button");
        // btn.style = "background: white; width: calc(100% - 120px); font-size: 2em; height: 3em; border-radius: 15px; margin: 60px; margin-bottom: 0px; border: none; cursor: pointer;";
        // btn.textContent = "Hide Header";
        // btn.onclick = () => {
        //     const header = document.getElementById('masthead-container');
        //     if (header.style.display === "none") { 
        //         header.style = "display: flex" 
        //         btn.textContent = "Hide Header" 
        //     }
        //     else { 
        //         header.style = "display: none" 
        //         btn.textContent = "Show Header"
        //     }
        // };
        // const below = document.getElementById('below');
        // below.insertBefore(btn, below.firstChild);

    // }
    
    return (
        <LandingBackground loadPic={Me}>
            <LandingContainer >
                <AuxLandingScroll
                    onScroll={handleScroll}
                    animation={animation} id="sc"
                    ref={refScrollDiv}
                >
                    <Spider animation={animation} />
                    <SpiderLight animation={animation} />

                    <LandingText animation={animation} >
                        {t('landing.greeting')}
                        <br />
                        Herberth
                        <PictureContainer picture={Me} />
                        <Space width="100%" height="calc(80vh - 50px)" />
                    </LandingText>

                    <Routes>
                        <Route path="contact" element={
                            <Contact />
                        } />
                    </Routes>
                </AuxLandingScroll>
            </LandingContainer>
        </LandingBackground>
    )
}

export default LandingPage;