import { configureStore, Store } from '@reduxjs/toolkit';
import ThemeReducer from './themeSlice';
import ItemsReducer from './getItemsSlice'
import CartReducer from './cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        items: ItemsReducer,
        cart: CartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch