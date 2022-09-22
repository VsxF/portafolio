import { FC } from "react";
import { Box, Description, LoadingSpan, PictureBox, Price, Title } from "../Item/style";
import { Space } from "../../../general/icons/icons";

const ItemLoading: FC = () => {

    return (
        <Box>
            <PictureBox $loading />

            <Description>
                <Title $loading>
                    <LoadingSpan />
                </Title>

                <Space width="50%" height="5px" />

                <Price>
                    <LoadingSpan />
                </Price>

            </Description>
        </Box>
    )
}


export default ItemLoading;