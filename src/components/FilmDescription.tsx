import React, {useEffect, useState} from 'react';
import {useLazyGetFilmDescriptionQuery} from "../store/films/films.api";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";
import {Link} from "react-router-dom";

interface Props {
    title: string
}

export function FilmDescription(prop: Props) {
    const [fetchFilms, {isLoading, data, isError}] = useLazyGetFilmDescriptionQuery();

    useEffect(() => {
        fetchFilms(prop.title)
    }, [prop.title])
    return (
        <>
            {isLoading && <p>Data is loading</p>}
            {data && <div className="flex justify-center">
                {/*<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">*/}
                <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={data?.image!} alt=""/>
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{data?.title!} ({data?.year!})</h5>
                    <p className="text-gray-700 text-base mb-4">{data?.plot!}</p>
                    <p className="text-gray-700 text-base mb-4">{data?.awards! || 'no awards'}</p>
                    <p className="text-gray-700 text-base mb-4">{data?.imDbRating!}</p>
                    <p className="text-gray-700 text-base mb-4">{data?.directors!}</p>
                    <p className="text-gray-600 text-xs">{data?.genres!}</p>
                </div>
                {/*</div>*/}
            </div>}
        </>


    )

}
