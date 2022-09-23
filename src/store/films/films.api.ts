import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BestFilms, ServerResponse} from "../../models/serverModel";
import {IWiki, IFilm, BestFilmsItem} from "../../models/reactComponentsModel"

export const filmsApi = createApi({
    reducerPath: 'films/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb-api.com'
    }),
    endpoints: build => ({
        searchFilms: build.query<IFilm[], string>({
            query: (search: string) => ({
                url: `API/Search/k_lcpdw451/${search}`,
            }),
            transformResponse: (response: ServerResponse<IFilm>) => response.results
        }),
        getFilmDescription: build.query<IWiki, string>({
            query: (id: string) => ({
                url: `en/API/Title/k_lcpdw451/${id}`,
            })
        }),
        getBestFilms: build.query<BestFilmsItem[], void>({
            query: () => ({
                url: `en/API/MostPopularMovies/k_lcpdw451`,
            }),
            transformResponse: (response: BestFilms<BestFilmsItem>) => response.items
        })
    })
})

export const { useSearchFilmsQuery, useLazyGetFilmDescriptionQuery, useGetBestFilmsQuery } = filmsApi
