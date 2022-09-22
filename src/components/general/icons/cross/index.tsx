import { FC, useEffect, useState } from "react";
import IsPhone from "../../../../hooks/isPhone";
import { CrossHorizontal, CrossSVG, CrossVertical, CrossContainer, CrossCircle } from "./style";

export const Cross: FC<{ clicked?: boolean, less?: boolean }> = ({ less }) => {
    const [clicked, setClicked] = useState(false);
    const isPhone = IsPhone();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (clicked) {
            timer = setTimeout(() => {
                setClicked(false)
            }, 1000);
        }
        return () => { clearTimeout(timer) }
    }, [clicked])

    return (
        <CrossSVG width="350" height="350" isPhone={isPhone} clicked={clicked} less={less} onClick={ () => setClicked(true) } viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <CrossCircle cx="175" cy="175" r="175" />
            <CrossContainer  up={clicked}>
                <CrossVertical  less={less} >
                    <rect x="135" y="75" width="80" height="200" />
                    <circle cx="175" cy="75" r="40" />
                    <circle cx="175" cy="275" r="40" />
                </CrossVertical>
                <CrossHorizontal>
                    <rect x="75" y="215" width="80" height="200" transform="rotate(-90 75 215)" />
                    <circle cx="81" cy="175" r="40" />
                    <circle cx="275" cy="175" r="40" />
                </CrossHorizontal>
            </CrossContainer>
        </CrossSVG>
    )
}



export default Cross;