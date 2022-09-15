import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk'
interface FilmsState {
    favourites: string[]
}

const initialState: FilmsState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const filmsActions = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
