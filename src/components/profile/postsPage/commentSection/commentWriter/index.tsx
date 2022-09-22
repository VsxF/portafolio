import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import IsPhone from "../../../../../hooks/isPhone";
import IconContainer from "../../../../general/icons/iconContainer";
import { Arrow } from "../../../../general/icons/icons";
import { SampleProfilePicture } from "../../../sampelData";
import { PostProfilePicture } from "../../post/style";
import { CommentInput, CommentWriterContainer } from "./style";

const CommentWriter: FC<{ addComment: Function }> = ({ addComment }) => {
    const [ value, setValue ] = useState<string>("");
    const [t, i18] = useTranslation('global');
    const refInput = useRef<HTMLInputElement>(null);
    const isPhone = IsPhone();

    useEffect(() => {
        // if (refInput.current && !isPhone) refInput.current.focus()
        // return () => {}
    })

    const addCommentt = () => {
        addComment(value);
        setValue("");
    }

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") addCommentt()
    }

    return (
        <CommentWriterContainer>
            <PostProfilePicture 
                src={SampleProfilePicture} 
                width="2em" 
                noShadow
            />
            <CommentInput
                placeholder={t('postPage.post.write_comment')}
                value={value}
                onKeyDown={handleKeyDown}
                onChange={(e) => setValue(e.target.value)}
                ref={refInput}
            />
            <IconContainer 
                color="white" 
                width="2em" 
                padding="1px"
                noBorder
                onClick={addCommentt}
            >
                <Arrow dir="right" />
            </IconContainer>
        </CommentWriterContainer>
    )
}

export default CommentWriter;