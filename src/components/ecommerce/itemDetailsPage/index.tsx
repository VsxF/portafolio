import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { add2Cart } from "../../../redux/cartSlice";
import { RootState } from "../../../redux/store";
import Button from "../../general/button/style";
import IconContainer from "../../general/icons/iconContainer";
import { Arrow, Space } from "../../general/icons/icons";
import Select from "../../general/select";
import ItemCarousel from "./itemCarousel";
import ItemInfo from "./itemInfo";
import { BackContainer, DetailsContainer, ItemTitle, Price } from "./style";

const ItemDetailsPage: FC = () => {
    const asin = useLocation().pathname.split('/')[3];
    const itemState = useSelector((state: RootState) => state.items);
    const item = itemState.items.find(item => item.asin === asin)
    const dispatch = useDispatch();
    const exampleQuantities = Array.from(Array(15).keys());
    const [qnt, setQnt] = useState(1);
    const lastLocation = useLocation().state as string;
    const navigate = useNavigate();
    const [t] = useTranslation('global');

    useEffect(() => {
        if (item === undefined && itemState.loading === 'succeeded') {
            navigate(lastLocation)
        }
    })

    useEffect(() => {
        document.title = "NuK - " + item?.title;
        return () => { document.title = "NuK - sublimexf" }
    }, [item]) 

    return (
        <>
            <BackContainer>
                <Link to={lastLocation} >
                    <IconContainer
                        color="transparent"
                        padding="0px"
                        noBorder
                    >
                        <Arrow dir="left" />
                    </IconContainer>
                    <Space />
                    Back
                </Link>
            </BackContainer>

            <ItemCarousel
                picture={item?.image as string}
                alt={item?.title as string}
            />

            <DetailsContainer>
                <ItemTitle> {item?.title} </ItemTitle>
                <Price>
                    {item?.price?.value ? <>Price: <b> {item.price.symbol + item.price.value} </b></> : "No Disponible"}
                </Price>

                <Select
                    title={t('ecommerce.detailsPage.qnt') + " " + qnt}
                    radius
                    width="40%"
                >
                    {exampleQuantities.map((qnt, key) =>
                        <option
                            onClick={() => setQnt(qnt + 1)}
                            key={key}
                        >
                            {qnt + 1}
                        </option>)}
                </Select>

                <Space width="100%" height="40px" />

                <Button center disabled={item?.price?.value === undefined}
                    onClick={() => {
                        if (item) {
                            dispatch(add2Cart({
                                ...item,
                                qnt: qnt
                            }))
                        }
                    }}
                >
                    {t('ecommerce.detailsPage.addButton')}
                </Button>
            </DetailsContainer>

            <ItemInfo />
        </>
    )
}

export default ItemDetailsPage;