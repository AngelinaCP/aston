import React from 'react'
import {useAppSelector} from "../hooks/redux";
import {FavouriteCard} from "../components/FavouriteCard";
import {FilmCard} from "../components/FilmCard";


export function FavouritesPage() {
    const {favourites} = useAppSelector(state => state.films)
    // const [fetchFilms, {isLoading: loadingFilms, data: film, isError}] = useLazyGetFilmDescriptionQuery();
    if (favourites.length === 0) {
        return (
            <p className="center">No items</p>
        )
    }
    return (

        <div className="justify-center flex-wrap flex-initial flex gap-6">
            {favourites.map(f => (
                <FavouriteCard key={f} id={f}/>
            ))
            }
        </div>


    )
}
