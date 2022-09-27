import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Arrow } from "../../../general/icons/icons";
import { ArrowContainer, Example, ItemPicture, Picture } from "./style";


const ItemCarousel: FC<{ picture: string, alt: string }> = ({ picture, alt }) => {
    const [actualIndex, setActual] = useState(0);
    const [nextState, setNext] = useState(false);
    const [t] = useTranslation('global');
    const pictures = [
        //picture of the item
        picture,
        //Example pictures
        "https://images.unsplash.com/photo-1586527484765-979a20639316?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80",
        "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]

    const next = () => {
        if (pictures.length < 2) return
        if (actualIndex === pictures.length - 1) {
            setActual(0)
        } else {
            setActual(actual => actual + 1)
        }
        setNext(true)
    }

    const prev = () => {
        if (pictures.length < 2) return
        if (actualIndex === 0) {
            setActual(pictures.length - 1)
        } else {
            setActual(actual => actual - 1)
        }
        setNext(false)
    }

    return (
        <ItemPicture>
            {pictures.map((pic, key) =>
                <Picture
                    src={pic}
                    key={key}
                    show={actualIndex === key}
                    next={nextState}
                    alt={key === 0 ? alt : "example" }
                />
            )}

            <ArrowContainer left onClick={next} >
                <Arrow dir="left" />
            </ArrowContainer>
            <ArrowContainer onClick={prev}>
                <Arrow dir="right" />
            </ArrowContainer>

            {actualIndex !== 0 && <Example> {t('ecommerce.detailsPage.example')} </Example>}
        </ItemPicture>
    )
}

export default ItemCarousel;