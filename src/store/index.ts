import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./films/films.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filmsReducer } from "./films/films.slice";

export const store = configureStore({
    reducer: {
        [filmsApi.reducerPath]: filmsApi.reducer,
        films: filmsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
