import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilmsState {
    favourites: string[]
}

const LS_FAV_KEY = 'rfk'
const initialState: FilmsState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload);
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload);
        }
    }
})

export const filmsActions = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
