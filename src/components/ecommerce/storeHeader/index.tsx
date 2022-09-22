import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../redux/store";
import Cart from "../../general/icons/cartIcon";
import IconContainer, { IconPadding } from "../../general/icons/iconContainer";
import { ProfileIcon, Space, StoreIcon } from "../../general/icons/icons";
import { HalfContainer, SHeader, StoreTag } from "./style";

const StoreHeader: FC = () => {
    const cartState = useSelector((state: RootState) => state.cart)
    const ref = useRef<null | HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        ref.current?.scrollIntoView();
    }, [location])

    return (
        <SHeader ref={ref}>
            <Link to="/proyects/ecommerce">
                <HalfContainer>
                    <IconPadding>
                        <IconContainer padding="13px">
                            <StoreIcon />
                        </IconContainer>
                    </IconPadding>
                    <StoreTag >NuK</StoreTag>
                </HalfContainer>
            </Link>

            <HalfContainer $end >
                <Link to="/proyects/ecommerce/cart">
                    <Cart>
                        {cartState.totalQnt !== 0 &&
                            <IconContainer width="2px" cartNumber>
                                {cartState.totalQnt}
                            </IconContainer>
                        }
                    </Cart>
                </Link>

                <Space />
                <Link to="/proyects/profile/information">
                    <IconContainer>
                        <ProfileIcon />
                    </IconContainer>
                </Link>
            </HalfContainer>

        </SHeader>
    )
}

export default StoreHeader;