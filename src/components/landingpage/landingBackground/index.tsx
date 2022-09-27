import { FC, ReactNode, useEffect, useState } from "react";
import { Background, BackgroundContainer, Loading } from "./style";
import Vac from "../../general/icons/landingAssets/vac.jpg"
import VacNoSky from '../../general/icons/landingAssets/vacNotSky1.png'
import { LandingContainer } from "../style";

const LandingBackground: FC<{ children?: ReactNode, noWait?: boolean, loadPic?: string }> = ({ children, noWait, loadPic }) => {
    const [hypotenuse, setHypotenuse] = useState([0, 0, 0])
    const [sourceLoaded, setSourceLoaded] = useState([false, false, false]);

    //return hypotenuse, x, y
    //set with: and height: hypotenuse
    //set position: absolute, top: y, left: x
    //perfect size to rotate the stars without going off the screen
    const getHypotenuse = (): [number, number, number] => {
        const aPlusb = Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
        const h = Math.sqrt(aPlusb);
        const x = -(h - window.innerWidth) / 2
        const y = -(h - window.innerHeight) / 2
        return [h, x, y]
    }

    useEffect(() => {
        setHypotenuse(getHypotenuse())
        window.addEventListener('resize', () => setHypotenuse(getHypotenuse()))
        return () => window.removeEventListener('resize', () => setHypotenuse(getHypotenuse()))
    }, [])

    useEffect(() => { // set sourceLoaded [true, true, true] when the 3 pictures load
        if (!sourceLoaded[0] || !sourceLoaded[1] || !sourceLoaded[2]) {
            const img = new Image();
            const img2 = new Image();
            const img3 = new Image();
            img.src = Vac;
            img2.src = VacNoSky;
            img3.src = loadPic || "";
            img.onload = () => setSourceLoaded(sl => [true, sl[1], sl[2]]);
            img2.onload = () => setSourceLoaded(sl => [sl[0], true, sl[2]]);
            if (loadPic !== undefined)
                img3.onload = () => setSourceLoaded(sl => [sl[0], sl[1], true]);
            else
                setSourceLoaded(sl => [sl[0], sl[1], true]);
        }
    }, [sourceLoaded, loadPic])

    return (
        <>
            {noWait && children}

            {(!sourceLoaded[0] || !sourceLoaded[1] || !sourceLoaded[2]) ?
                <>
                    <LandingContainer>
                        <Loading />
                    </LandingContainer>
                </>
                :
                <>
                    <BackgroundContainer>
                        <Background
                            vac={Vac}
                            vacNoSky={VacNoSky}
                            hypotenuse={hypotenuse[0]}
                            X={hypotenuse[1]}
                            Y={hypotenuse[2]}
                        />

                        <svg style={{ display: "none" }}>
                            <filter id="stars">
                                <feTurbulence baseFrequency="0.2" in="SourceGraphic" />
                                <feColorMatrix values="0 0 0 9 -4
                                                        0 0 0 9 -4
                                                        0 0 0 9 -4
                                                        0 0 0 0 0.2"
                                />
                            </filter>
                        </svg>

                    </BackgroundContainer>

                    {!noWait && children}
                </>}
        </>
    )
}

export default LandingBackground;