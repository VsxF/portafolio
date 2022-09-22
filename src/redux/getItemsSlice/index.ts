import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../backend/api";

import Api from '../../backend/api'

export interface IgetItemsState { 
    items: IItem[],
    loading: 'requested' | 'succeeded' | 'failed' | 'idle'
}

const initialState: IgetItemsState = { 
    items: [],
    loading: 'idle'
}

export const FetchItems = createAsyncThunk('Items/fetchItems', (lang: string) => {
    return Api.getItems(lang);
})

export const getItemsSlice = createSlice({
    name: 'getItems',
    initialState,
    extraReducers: builder => {
        builder.addCase(FetchItems.pending, state => {
            state.loading = 'requested'
            state.items = []
        })
        builder.addCase(FetchItems.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.items = action.payload
        })
        builder.addCase(FetchItems.rejected, state => {
            state.loading = 'failed'
        })
    },
    reducers: {
        changeLang: (state) => { 
            state.items = []
            state.loading = 'idle'
        } 
    }
})

export const {changeLang} = getItemsSlice.actions;
export default getItemsSlice.reducer;