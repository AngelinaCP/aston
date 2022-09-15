import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm, IWiki, ServerResponse } from "../../models/models";

export const filmsApi = createApi({
    reducerPath: 'films/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb-api.com'
    }),
    endpoints: build => ({
        searchFilms: build.query<IFilm[], string>({
            query: (search: string) => ({
                url: `API/Search/k_9o9e7bo5/${search}`,
                // headers: {
                //     'X-RapidAPI-Key': 'b96434e6eemsh51b33d6cd3ddee6p1e3e18jsn473a44ad3868',
                //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                // },
                // params: {
                //     q: search
                // }
            }),
            transformResponse: (response: ServerResponse<IFilm>) => response.results
        }),
        getFilmDescription: build.query<IWiki[], string>({
            query: (id: string) => ({
                url: `en/API/Title/k_9o9e7bo5/${id}/Wikipedia`,
            })
        })
    })
})

export const { useSearchFilmsQuery, useLazyGetFilmDescriptionQuery } = filmsApi
