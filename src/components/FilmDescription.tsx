import React, {useEffect} from 'react';
import {useLazyGetFilmDescriptionQuery} from "../store/films/films.api";
import PropTypes from "prop-types";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

interface Props {
    id: string
}

function FilmDescription({id}: Props) {
    const [fetchFilms, {isLoading, data}] = useLazyGetFilmDescriptionQuery();
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.films)
    const isFav = favourites.includes(id)

    const addToFavourite = () => {
        addFavourite(id)
    }

    const removeFromFavourite = () => {
        removeFavourite(id)
    }
    useEffect(() => {
        fetchFilms(id)
    }, [id])
    return (
        <>
            {isLoading && <p>Data is loading</p>}
            {data &&
                <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">

                    <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
                        <div
                            className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
                            <div
                                className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">

                                <div className="slider">
                                    <div className="slide-ana lg:relative">
                                        <div className="flex">
                                            <img
                                                src={data?.image!}
                                                alt="A black chair with wooden legs" className="w-full h-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">{data?.title!} ({data?.year!})</h1>
                                <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">{data?.plot!}</p>
                                <p className="text-gray-700 text-base mb-4">Awards: {data?.awards! || 'no awards'}</p>
                                <p className="text-gray-700 text-base mb-4">Rating: imDb{data?.imDbRating!}</p>
                                <p className="text-gray-700 text-base mb-4">Directors: {data?.directors!}</p>
                                <p className="text-gray-600 text-xs">{data?.genres!}</p>
                                <p className="text-gray-600 text-xs p-2">{data?.runtimeStr!}</p>
                                {!isFav && <button className="p-5" type="button" onClick={addToFavourite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                         stroke="#f94144" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                    </svg>
                                </button>
                                }
                                {isFav && <button className="p-5" type="button" onClick={removeFromFavourite}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f94144" viewBox="0 0 24 24"
                                         strokeWidth="1.5"
                                         stroke="#f94144" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                    </svg>
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

FilmDescription.propTypes = {
    id: PropTypes.string
}

export default FilmDescription;
