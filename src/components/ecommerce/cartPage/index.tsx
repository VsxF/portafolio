import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../../../redux/cartSlice";
import { RootState } from "../../../redux/store";
import Button from "../../general/button/style";
import IconContainer from "../../general/icons/iconContainer";
import { Location, Space } from "../../general/icons/icons";
import Radio from "../../general/radio";
import CartItem from "./cartItem";
import { ItemTitle, LeftColumn, Bar, CheckoutWrapper, CheckoutContent } from "./style";

const CartPage: FC = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const [total, setTotal] = useState(0);
    const [showCheckOut, setShowCO] = useState(false);
    const [t, i18] = useTranslation('global');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let aux = 0;
        for (let i = 0; i < cartState.items.length; i++) {
            const item = cartState.items[i];
            aux += item.price.value * (item.qnt ? item.qnt : 1)
        }
        setTotal(aux)
    }, [cartState.totalQnt])

    return (
        cartState.totalQnt === 0 ?
            <ItemTitle>
                {t('ecommerce.cartPage.order_fail', { returnObjects: true })[0]}
                <br />
                {t('ecommerce.cartPage.order_fail', { returnObjects: true })[1]}
            </ItemTitle>
            :
            <>

                <Bar>
                    <ItemTitle>{t('ecommerce.cartPage.items')}</ItemTitle>
                    <LeftColumn>{t('ecommerce.cartPage.quantity')}</LeftColumn>
                </Bar>

                {cartState.items.map((item, key) =>
                    <CartItem item={item} key={key} />)}

                <Bar>
                    <Space />
                    <LeftColumn>Total: {(cartState.items.at(0)?.price ?
                        cartState.items[0].price.symbol : "") + " " + total.toFixed(2)} </LeftColumn>
                </Bar>

                <Bar>
                    <h3>{t('ecommerce.cartPage.deliver_to')}:</h3>
                </Bar>

                <Bar center>
                    <IconContainer color="transparent" noBorder>
                        <Location />
                    </IconContainer>
                    {t('ecommerce.cartPage.address')}
                </Bar>

                <Bar>
                    <h3>{t('ecommerce.cartPage.payment_method')}</h3>
                </Bar>

                <Radio selected>
                    Visa &#x2022; &#x2022; &#x2022; &#x2022; 4343
                    <div /> Maria Julissa
                </Radio>
                <Radio>
                    Paypal
                    <div /> Maria Antonieta
                </Radio>

                <Radio>Visa &#x2022; &#x2022; &#x2022; &#x2022; 8335
                    <div /> Mario Julio
                </Radio>

                <Space height="40px" width="100%" />
                <Button center
                    onClick={() => setShowCO(true)}
                >
                    {t('ecommerce.cartPage.checkout')}
                </Button>

                {showCheckOut &&
                    <CheckoutWrapper onClick={() => {
                        setShowCO(false);
                        dispatch(deleteCart());
                        navigate("/Proyects/ecommerce")
                    }}>
                        <CheckoutContent>
                            {t('ecommerce.cartPage.order_did')}
                        </CheckoutContent>
                    </CheckoutWrapper>
                }
            </>
    )
}






export default CartPage;