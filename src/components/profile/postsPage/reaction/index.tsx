import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useOutsideClick from "../../../../hooks/useOutSideClick";
import { Space } from "../../../general/icons/icons";
import { Exs, Joy, Like, Love, Minus } from "../../../general/icons/reactions";
import { ReactionField, Reactions, ReactionSectionContainer } from "./style";

interface IReaction {
    showComments: Function,
    show: boolean
    reacts: number,
    reply: number,
}


const Reaction: FC<IReaction> = ({ showComments, reacts, reply, show }) => {
    const [reactions, setReactions] = useState(reacts); // reactions count
    const [openReactions, setOpenReactions] = useState(false); // show reactions
    const [reactionIndex, setReactionIndex] = useState(0); // Wich reaction was clicked, to show
    const [firstClick, setFirstClick] = useState(false); // detects first click, if not, open and close reactions at same time 
    const refReactions = useOutsideClick(() => setOpenReactions(firstClick)); // close on outSide click
    const [t] = useTranslation('global');

    // normal: onClick everywhere -> close Reactions ...
    // useEffect: onFirstClick, open, then onClick everywhere close
    useEffect(() => {
        setTimeout(() => {
            setFirstClick(false)
        }, 250);
    }, [ firstClick ])

    const reactClick = (index: number) => {
        setReactionIndex(index);
        setReactions(reacts + 1);
    }

    const handleReactionsButton = (event: any) => {
        const pathEvent = event.nativeEvent.path
        const eventInDiv = pathEvent[pathEvent.length - 13 - 3 * reply ]
        //Determine if the click is not in <Reactions> element
        if (!(eventInDiv ? eventInDiv === refReactions.current : false)) {
            if (reactions === reacts + 1) {
                setReactions(reacts) 
                setOpenReactions(false)
                setReactionIndex(0)
            }
        } else {
            setOpenReactions(firstClick)
            
        }
        if (reactions !== reacts + 1) {
            setFirstClick(true)
        }
        
    }

    return (
        <ReactionSectionContainer line={ reply === -1 }>
            <ReactionField
                onMouseEnter={() => setOpenReactions(true)}
                onClick={handleReactionsButton}
                active={reacts !== reactions}
                reply={reply}
            >
                <Reactions
                    open={openReactions}
                    onMouseLeave={() => setOpenReactions(false)}
                    onClick={() => setOpenReactions(false)}
                    ref={refReactions}
                >
                    <Like onClick={() => reactClick(0)} />
                    <Love onClick={() => reactClick(1)} />
                    <Joy onClick={() => reactClick(2)} />
                    <Exs onClick={() => reactClick(3)} />
                    <Minus onClick={() => reactClick(4)} />
                </Reactions>
                {reactionIndex === 0 && <Like />}
                {reactionIndex === 1 && <Love />}
                {reactionIndex === 2 && <Joy />}
                {reactionIndex === 3 && <Exs />}
                {reactionIndex === 4 && <Minus />}
                {reactions}
            </ReactionField>

            {(reply -1 > 1) ? <Space width="50%" height="1px" /> :
                <ReactionField 
                    onClick={() => showComments()}
                    show={show}
                    reply={reply}
                >
                        {t('postPage.post.commentField')}
                </ReactionField>
            }
        </ReactionSectionContainer >
    )
}

export default Reaction;