import React, {useEffect, useState} from 'react';
import {useLazyGetFilmDescriptionQuery} from "../store/films/films.api";

interface Props {
    id: string
}

export function FilmDescription({id}: Props) {
    const [fetchFilms, {isLoading, data, isError}] = useLazyGetFilmDescriptionQuery();

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
                                <p className="text-gray-600 text-xs">{data?.runtimeStr!}</p>
                                <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
                                {/*<div className="mt-6">*/}
                                {/*    <button onClick={removeFromFavourite}*/}
                                {/*        className="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Remove from favourites*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )

}
