import { createSlice } from '@reduxjs/toolkit'

export const filmSlice = createSlice({
    name: 'films',
    initialState: {
        films: [],
        film: {},
        favouriteFilms: []
    },
    reducers: {
        setFilms: (state, action) => {
            //state.films = state.films
            console.log(action)
            console.log(state)

            state.films = action.payload.films
        },
        setFilmById: (state, action) => {
            console.log(action)
            console.log(state)

            state.film = action.payload.film
        },
        setFavouriteFilms: (state, action) => {
            console.log(action)
            console.log(state) 

            state.favouriteFilms.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setFilms, setFilmById, setFavouriteFilms } = filmSlice.actions