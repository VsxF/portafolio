import { RefObject, useEffect, useRef } from "react";

const IsFirstUpdate = (): RefObject<boolean> => {
    const firstUpdate = useRef(true);

    useEffect(() => {
        firstUpdate.current = false;
    }, [])
    return firstUpdate;
}

export default IsFirstUpdate;