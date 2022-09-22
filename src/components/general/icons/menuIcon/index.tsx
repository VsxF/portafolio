import { FC } from "react";
import IsFirstUpdate from "../../../../hooks/IsFirstUpdate";
import { EndsBar, MenuSVG, MidsBar } from "./style";

const MenuIcon: FC<{ open: boolean }> = ({ open }) => {
    const firstUpdate = IsFirstUpdate();

    return (
        <MenuSVG width="690" height="515" viewBox="0 0 690 515" fill="none" xmlns="http://www.w3.org/2000/svg">
            <EndsBar top open={open} firstUpdate={firstUpdate.current || true} >
                <rect x="45.0392" y="0.736511" width="600" height="90" fill="black" />
                <circle cx="645" cy="45.7365" r="45" fill="black" />
                <circle cx="45" cy="45.7365" r="45" fill="black" />
            </EndsBar>
            <MidsBar mid2={false} open={open} firstUpdate={firstUpdate.current || true} >
                <rect x="45.0391" y="212.977" width="600" height="90" fill="black" />
                <circle opacity="0.9" cx="645" cy="257.737" r="45" fill="black" />
                <circle cx="45" cy="257.737" r="45" fill="black" />
            </MidsBar>
            <MidsBar mid2 open={open} firstUpdate={firstUpdate.current || true} >
                <rect x="45.0395" y="212.977" width="600" height="90" fill="black" />
                <circle cx="645" cy="257.736" r="45" fill="black" />
                <ellipse cx="45.0001" cy="257.736" rx="45" ry="45" fill="black" />
            </MidsBar>
            <EndsBar top={false} open={open} firstUpdate={firstUpdate.current || true} >
                <rect x="45.0392" y="424.737" width="600" height="90" fill="black" />
                <circle cx="645" cy="469.737" r="45" fill="black" />
                <circle cx="45" cy="469.737" r="45" fill="black" />
            </EndsBar>
        </MenuSVG>


    )
}








export default MenuIcon;