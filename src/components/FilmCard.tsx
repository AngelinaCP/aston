import React, { useState } from 'react';
import { IFilm } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export function FilmCard({ film }: { film: IFilm }) {

    const { addFavourite, removeFavourite } = useActions()
    const { favourites } = useAppSelector(state => state.films)
    const [isFav, setIsFav] = useState(favourites.includes(film.title))
    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFav(true)
        addFavourite(film.title)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFav(false)
        removeFavourite(film.title)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md">
            <img width="189" height="255" src={film.image} alt="film-photo" />
            <h2 className="text-lg font-bold">{film.title}</h2>
            <p className="text-sm">
                <span className="font-bold">{film.description}</span>
            </p>
            {/*<p className="text-sm font-thin">{film?.description}</p>*/}

            {!isFav && <button onClick={addToFavourite}>Add to favourites</button>}
            {isFav && <button onClick={removeFromFavourite}>Remove</button>}
        </div>
    );
}
