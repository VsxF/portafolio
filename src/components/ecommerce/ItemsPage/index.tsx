import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Title } from "../style";
import Item from "./Item";
import ItemLoading from "./ItemLoading";

const ItemsPage: FC = () => {
    const itemsState = useSelector((state: RootState) => state.items.items)
    const loadingArray = Array.from(Array(8).keys());
    const [t, i18] = useTranslation('global');
    
    return (
        <>
            <Title> {t('ecommerce.title')} </Title>
            {itemsState.length === 0 ?
                loadingArray.map(key =>
                    <ItemLoading key={key} />)
                :
                itemsState.map((item, key) =>
                    <Item key={key} item={item} />)
            }
        </>
    )
}

export default ItemsPage;