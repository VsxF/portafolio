import { useEffect, useState } from "react";

const IsPhone = (action?: Function) => {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPhone/i)) {
            setIsPhone(true);
            if (action) action();
        }
    }, [action]) 

    return isPhone;
}

export default IsPhone;