import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IItem } from "../../../../backend/api";
import IsPhone from "../../../../hooks/isPhone";
import { add2Cart } from "../../../../redux/cartSlice";
import { RootState } from "../../../../redux/store";
import Cart from "../../../general/icons/cartIcon";
import { Stars } from "../Stars";
import { Box, CartOver, Description, Picture, PictureBox, Price, Title } from "./style";

const Item: FC<{ item: IItem }> = ({ item }) => {
    const itemInCart = useSelector((state: RootState) =>
        state.cart.items.find(itm => itm.asin === item.asin));
    const [showCart, setShowCart] = useState(false);
    const [isHover, setHover] = useState(false);
    const isPhone = IsPhone(() => setShowCart(true))
    const dispatch = useDispatch();
    const examplePicture = "https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"

    const handleHover = (value: boolean) => {
        setShowCart(value);
        setHover(value);
    }

    const handleCartClick = () => {
        let auxQnt = 1;
        if (itemInCart && itemInCart.qnt) auxQnt = -itemInCart.qnt;

        dispatch(add2Cart({
            ...item,
            qnt: auxQnt
        }))

        if (isPhone) handleHover(false);
    }

    return (
        <Box
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            onTouchMove={() => handleHover(true)}
            onTouchEnd={() => handleHover(false)}
        >

            {(showCart || isPhone) && item.price?.value &&
                <CartOver>
                    <Cart type={itemInCart ? "remove" : "add"} onClick={() => handleCartClick()} />
                </CartOver>
            }

            <Link
                to={"/proyects/ecommerce/" + item.asin}
                state={"/proyects/ecommerce"}
            >
                <PictureBox>
                    <Picture
                        show={isHover}
                        src={examplePicture}
                        alt="sample"
                    />
                    <Picture
                        show={!isHover}
                        src={item.image}
                        alt={item.title}
                    />
                </PictureBox>

                <Description>
                    <Title>{item.title}</Title>

                    <Stars rating={item.rating !== undefined ? item.rating : 0} />

                    <Price>{item.price?.value ? item.price.symbol + item.price.value : "No disponible"}</Price>

                </Description>
            </Link>
        </Box>
    )
}

export default Item;