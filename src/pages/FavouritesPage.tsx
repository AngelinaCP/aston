import React from 'react'
import {useAppSelector} from "../hooks/redux";
import {FavouriteCard} from "../components/FavouriteCard";


export function FavouritesPage() {
    const {favourites} = useAppSelector(state => state.films)
    // const [fetchFilms, {isLoading: loadingFilms, data: film, isError}] = useLazyGetFilmDescriptionQuery();
    if (favourites.length === 0) {
        return (
            <p className="center">No items</p>
        )
    }
    return (

                <div className="flex justify-center flex-wrap flex-initial gap-6 pt-10 mx-auto h-screen w-screen">
                    {favourites.map(f => (
                        <FavouriteCard key={f} id={f}/>
                    ))
                    }
                </div>


    )
}
