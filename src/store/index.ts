import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./films/films.api";
import { filmsReducer } from "./films/films.slice";
import { LocalStorageMiddleware } from "../utils/localStorageMiddleware";

const rootReducer = combineReducers({
    [filmsApi.reducerPath]: filmsApi.reducer,
    films: filmsReducer
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware, LocalStorageMiddleware),
})

export type RootState = ReturnType<typeof rootReducer>
