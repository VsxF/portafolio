import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../backend/api";

export interface IcartState { 
    items: IItem[]
    totalQnt: number
}

const initialState: IcartState = { 
    // items: JSON.parse(localStorage.getItem('cart') as string)
    items: localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart') as string) : [],
    totalQnt: localStorage.getItem('cartQnt') ?
        Number(localStorage.getItem('cartQnt')) : 0
}


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add2Cart: (state, action: PayloadAction<IItem>) => { 
            let found = false;
            for (let i = 0; i < state.items.length; i++) {
                const item = state.items[i];
                
                if (item.title === action.payload.title && item.qnt && action.payload.qnt ) {
                    item.qnt += action.payload.qnt
                    state.totalQnt += action.payload.qnt

                    if (item.qnt === 0) {
                        state.items.splice(i, 1)
                    }

                    found = true;
                    break
                }
            }

            if (!found && action.payload.qnt) {
                state.items.push( action.payload );
                state.totalQnt += action.payload.qnt
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
            localStorage.setItem('cartQnt', JSON.stringify(state.totalQnt));
        },
        deleteCart: (state) => { 
            state.items = [];
            state.totalQnt = 0;
            localStorage.removeItem('cart');
            localStorage.removeItem('cartQnt');
        },
    }
})


export const { add2Cart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;