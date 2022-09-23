import {AnyAction, Dispatch, Middleware} from "@reduxjs/toolkit";
import {RFK, HK} from "./utils";
import {RootState} from "../store";

export const LocalStorageMiddleware: Middleware<{}, RootState> = (state) => (next) => (action) => {
    const favourites = state.getState().films.favourites;
    const history = state.getState().films.history;

    if (action.type === 'films/addFavourite') {
        localStorage.setItem(RFK, JSON.stringify([...favourites, action.payload]));
    }
    else if (action.type === 'films/removeFavourite') {
        localStorage.setItem(RFK, JSON.stringify(favourites.filter((f: string) => f !== action.payload)));
    }
    else if (history && action.type === 'films/addHistory') {
        localStorage.setItem(HK, JSON.stringify([...history, action.payload]));
    }
    // console.log("Middleware triggered:", action);
    next(action);
}