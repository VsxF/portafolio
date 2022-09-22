import { FC, useEffect, useState } from "react";
import { FieldContainer, FieldInput, FieldLabel } from "./style";

const Field: FC<{ field: string, data: string }> = ({ field, data }) => {
    const [value, setValue] = useState(data);

    useEffect(() => {
        setValue(data)
    }, [data])

    return (
        <FieldContainer>           
            <FieldInput
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
             <FieldLabel keepOnTop={ value !== "" } >{ field }</FieldLabel>
        </FieldContainer>
    )
}

export default Field;