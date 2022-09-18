import React, {useEffect, useState} from 'react';
import {useLazyGetFilmDescriptionQuery} from "../store/films/films.api";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";
import {Link} from "react-router-dom";

interface Props {
    id: string
}

export function FavouriteCard(prop: Props) {
    const [fetchFilms, {isLoading: loadingFilms, data, isError}] = useLazyGetFilmDescriptionQuery();

    const { removeFavourite } = useActions()
    const {favourites} = useAppSelector(state => state.films)
    const isFav = favourites.includes(prop.id)

    const removeFromFavourite = () => {
        removeFavourite(data?.id!)
    }

    useEffect(() => {
        fetchFilms(prop.id)
    }, [prop.id])

    return (
        // {isLoading && <p>Data is loading</p>}
        <div>
            <div
                className="rounded-lg shadow-lg bg-white max-w-sm block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Link key={data?.id!} to={`/card/${data?.id!}`}>
                    <div style={{
                        height: '500px', width: "100%",
                        backgroundImage: `url(${data?.image!})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}>
                    </div>
                </Link>
                <div className="p-6 justify-between">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{data?.title!}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <div className="flex justify-content space-x-10 px-4 pt-4">
                        {isFav && <button type="button" onClick={removeFromFavourite}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#f94144" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="#f94144" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                            </svg>
                        </button>
                        }
                    </div>
                    {/*{isFav && <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={removeFromFavourite}>Remove from favourites</button>}*/}
                </div>
            </div>
        </div>
    )

}
