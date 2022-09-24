import { FC, useEffect, useRef } from "react";
import { Container } from "./style";
import StoreHeader from "./storeHeader";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { FetchItems } from "../../redux/getItemsSlice";
import { Route, Routes, useLocation } from "react-router-dom";
import ItemsPage from "./ItemsPage";
import ItemDetailsPage from "./itemDetailsPage";
import CartPage from "./cartPage";
import { useTranslation } from "react-i18next";

const Ecommerce: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {i18n} = useTranslation('global');
    const location = useLocation().pathname;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = "NuK - sublimexf";
        return () => { document.title = "sublimexf" }
    }, []) 

    useEffect(() => {
        const promise = dispatch(FetchItems(i18n.language))
        return () => promise.abort();
    }, [i18n.language, dispatch])  

    useEffect(() => {
        if (ref.current) ref.current.scrollIntoView();
    }, [location])

    return (
        <>
            <StoreHeader />
            <Container ref={ref}>
                <Routes>
                    <Route index element={<ItemsPage />} />
                    <Route path=":asin" element={<ItemDetailsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Ecommerce;