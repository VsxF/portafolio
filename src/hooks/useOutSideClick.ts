import { RefObject, useEffect, useRef } from "react";

const useOutsideClick = (callback: Function): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
    return ref;
}

export default useOutsideClick;