import { createSlice } from '@reduxjs/toolkit'

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: {
        shopping: []
    },
    reducers: {
        setShopping: (state, action) => {
            console.log(action)
            console.log(state)

            state.shopping.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setShopping } = shoppingSlice.actions