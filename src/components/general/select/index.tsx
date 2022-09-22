import { FC, ReactNode, useState } from "react";
import useOutsideClick from "../../../hooks/useOutSideClick";
import { Arrow, Space } from "../icons/icons";
import { Options, SelectContainer } from "./style";

interface Props {
    children: ReactNode,
    title: string | ReactNode,
    hideArrow?: boolean,
    width?: string,
    optionsWidth?: string,
    radius?: boolean
}

const Select: FC<Props> = ({ children, title, width, optionsWidth, radius, hideArrow }) => {
    const [open, setOpen] = useState(false);
    const selectRef = useOutsideClick(() => setOpen(false))

    return (
        <SelectContainer
            onClick={() => setOpen(!open)}
            ref={selectRef}
            width={width}
            $radius={radius}
        >
            {title}
            {typeof title === "string" && <Space width="10px" height="1px" />}
            {!hideArrow && <Arrow dir="down" rotate={!open} $fill={radius? "black" : ""} />}
            <Options open={open} width={optionsWidth}>
                {/* <OptionsTriangle /> */}
                {children}
            </Options>
        </SelectContainer>
    )
}

export default Select;