import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {useContext} from "react";
import {AuthContext} from "../../components/AuthContext";
import {RFK, HK} from "../../utils/utils";

interface FilmsState {
    favourites: string[],
    history: string[]
}

const initialState: FilmsState = {
    favourites: JSON.parse(localStorage.getItem(RFK) as string ?? '[]'),
    history: JSON.parse(localStorage.getItem(HK) as string ?? '[]')
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
        },
        addHistory(state, action: PayloadAction<string>) {
            state.history.push(action.payload);
        }
    }
})

export const filmsActions = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
