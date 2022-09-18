import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "../../models/serverModel";
import {IWiki, IFilm} from "../../models/reactComponentsModel"

export const filmsApi = createApi({
    reducerPath: 'films/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb-api.com'
    }),
    endpoints: build => ({
        searchFilms: build.query<IFilm[], string>({
            query: (search: string) => ({
                url: `API/Search/k_nl3485w3/${search}`,
            }),
            transformResponse: (response: ServerResponse<IFilm>) => response.results
        }),
        getFilmDescription: build.query<IWiki, string>({
            query: (id: string) => ({
                url: `en/API/Title/k_nl3485w3/${id}`,
            })
        })
    })
})

export const { useSearchFilmsQuery, useLazyGetFilmDescriptionQuery } = filmsApi
