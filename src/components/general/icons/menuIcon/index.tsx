import { FC, useEffect, useState } from "react";
import { EndsBar, MenuSVG, MidsBar } from "./style";

const MenuIcon: FC<{ open: boolean }> = ({ open }) => {
    const [openFixed, setOpen] = useState<"open" | "close" | "unanimated">("unanimated");

    useEffect(() => { // prevent animation on first update
        setOpen(op => {
            if (op === "unanimated") return open ? "open" : "unanimated"
            return open ? "open" : "close"
        })
    }, [open])

    return (
        <MenuSVG width="690" height="515" viewBox="0 0 690 515" fill="none" xmlns="http://www.w3.org/2000/svg">
            <EndsBar one open={openFixed} >
                <rect x="45.0392" y="0.736511" width="600" height="90" fill="black" />
                <circle cx="645" cy="45.7365" r="45" fill="black" />
                <circle cx="45" cy="45.7365" r="45" fill="black" />
            </EndsBar>
            <MidsBar open={openFixed} >
                <rect x="45.0391" y="212.977" width="600" height="90" fill="black" />
                <circle opacity="0.9" cx="645" cy="257.737" r="45" fill="black" />
                <circle cx="45" cy="257.737" r="45" fill="black" />
            </MidsBar>
            <MidsBar one open={openFixed} >
                <rect x="45.0395" y="212.977" width="600" height="90" fill="black" />
                <circle cx="645" cy="257.736" r="45" fill="black" />
                <ellipse cx="45.0001" cy="257.736" rx="45" ry="45" fill="black" />
            </MidsBar>
            <EndsBar open={openFixed} >
                <rect x="45.0392" y="424.737" width="600" height="90" fill="black" />
                <circle cx="645" cy="469.737" r="45" fill="black" />
                <circle cx="45" cy="469.737" r="45" fill="black" />
            </EndsBar>
        </MenuSVG>


    )
}








export default MenuIcon;