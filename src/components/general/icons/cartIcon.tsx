import { FC, ReactNode, RefObject } from "react";
import IconContainer from "./iconContainer";
import { Add2Cart, DefaultCart, RemoveCart } from "./icons";

interface IProps { 
    type?: "add" | "remove" | "", 
    onClick?: Function, 
    ref?: RefObject<HTMLDivElement>,
    children?: ReactNode 
}

const Cart:FC<IProps> = ({ type, onClick, ref, children }) => {
    return (
        <IconContainer 
            onClick={ (e) => { if(onClick) onClick(e) }} 
            ref={ref}
        >
            {
                type === "add" ? <Add2Cart />
                : type === "remove" ? <RemoveCart />
                : <DefaultCart />
            }
            {children}
        </IconContainer>
    )
}





export default Cart;