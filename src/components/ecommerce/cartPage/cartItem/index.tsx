import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IItem } from "../../../../backend/api"
import IconContainer from "../../../general/icons/iconContainer";
import Cross from "../../../general/icons/cross";
import { CartItemContainer, CartItemPicture, CartItemTitle, QntContainer, QntIconsContainer } from "./style";
import { useDispatch } from "react-redux";
import { add2Cart } from "../../../../redux/cartSlice";

const CartItem: FC<{ item: IItem }> = ({ item }) => {
    const [qnt, setQnt] = useState(item.qnt as number);
    const dispatch = useDispatch();

    const changeQnt = (add?: boolean) => {
        dispatch(add2Cart({
            ...item,
            qnt: add ? 1 : -1
        }))
    }

    useEffect(() => {
        setQnt(item.qnt as number)
    }, [item])

    return (
        <CartItemContainer >
            <Link
                to={"/proyects/ecommerce/" + item.asin}
                state={"/proyects/ecommerce/cart"}
            >
                <CartItemPicture picture={item.image} />
                <CartItemTitle>{item.title}</CartItemTitle>
            </Link>
            <QntContainer>
                <QntIconsContainer>
                    <IconContainer
                        width="20px"
                        padding="0px"
                        onClick={() => changeQnt()}
                        noBorder
                    >
                        <Cross less />
                    </IconContainer>
                    <IconContainer
                        width="30px"
                        padding="3px"
                    >
                        {qnt}
                    </IconContainer>
                    <IconContainer
                        width="20px"
                        padding="0px"
                        onClick={() => changeQnt(true)}
                        noBorder
                    >
                        <Cross />
                    </IconContainer>
                </QntIconsContainer>
                {item.price.symbol + item.price.value}
            </QntContainer>
        </CartItemContainer>

    )
}

export default CartItem;