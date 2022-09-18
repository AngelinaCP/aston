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

    const {removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.films)
    const isFav = favourites.includes(prop.id)
    const LS_FAV_KEY = 'rfk'
    // console.log(data?.title!)

    const removeFromFavourite = () => {
        removeFavourite(data?.id!)
        localStorage.setItem(LS_FAV_KEY, JSON.stringify(favourites.filter(f => f !== data?.id!)));
    }

    useEffect(() => {
        fetchFilms(prop.id)
    }, [prop.id])
    console.log(data)

    return (
        // {isLoading && <p>Data is loading</p>}
        // <div>
        //     <div
        //         className="rounded-lg shadow-lg bg-white max-w-sm block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        //         <Link key={data?.id!} to={`/card/${data?.id!}`}>
        //             <div style={{
        //                 height: '500px', width: "100%",
        //                 backgroundImage: `url(${data?.image!})`,
        //                 backgroundRepeat: 'no-repeat',
        //                 backgroundSize: "cover",
        //                 backgroundPosition: 'center'
        //             }}>
        //             </div>
        //         </Link>
        //         <div className="p-6 justify-between">
        //             <h5 className="text-gray-900 text-xl font-medium mb-2">{data?.title!}</h5>
        //             <p className="text-gray-700 text-base mb-4">{data?.year!}</p>
        //             <div className="flex justify-content space-x-10 px-4 pt-4">
        //                 {isFav && <button type="button" onClick={removeFromFavourite}>
        //                     <svg xmlns="http://www.w3.org/2000/svg" fill="#f94144" viewBox="0 0 24 24"
        //                          strokeWidth="1.5"
        //                          stroke="#f94144" className="w-6 h-6">
        //                         <path strokeLinecap="round" strokeLinejoin="round"
        //                               d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        //                     </svg>
        //                 </button>
        //                 }
        //             </div>
        //             {/*{isFav && <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={removeFromFavourite}>Remove from favourites</button>}*/}
        //         </div>
        //     </div>
        // </div>
        <>
            {Boolean(data?.id!) && <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}
                 className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={data?.image!} alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title!}</h5>
                    </a>
                    {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">({data?.year!})</p>*/}
                    <a href="#"
                       className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>}
        </>
    )

}
