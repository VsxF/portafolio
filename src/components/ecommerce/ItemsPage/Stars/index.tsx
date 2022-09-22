import { FC } from "react"
import { Star } from "../../../general/icons/icons"
import { Container, StarRow } from "./style"

export const Stars:FC<{rating: number}> = ({ rating }) => {
    return (
        <Container>
            <StarRow>
                { rating >= 1 && <Star /> }
                { rating >= 2 && <Star /> }
                { rating >= 3 && <Star /> }
                { rating >= 4 && <Star /> }
                { rating >= 5 && <Star /> }
                { 
                    Number( rating?.toString().split('.')[1]?.slice(0, 1) ) >= 5 && 
                    <Star half /> 
                }
            </StarRow>
                            
        </Container>
    )
}
