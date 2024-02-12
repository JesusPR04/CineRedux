import { configureStore } from '@reduxjs/toolkit'
import { filmSlice } from './Slices/filmSlice'
import { shoppingSlice } from './Slices/shoppingSlice'

export const store = configureStore({
    reducer: {
        films: filmSlice.reducer,
        shopping: shoppingSlice.reducer
    },
})