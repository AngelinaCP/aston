import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { BestFilmsItem } from "../models/reactComponentsModel";

export function FilmCard({ film }: { film: BestFilmsItem }) {
    const { addFavourite, removeFavourite } = useActions()
    const { favourites } = useAppSelector(state => state.films)
    const isFav = favourites.includes(film.id)

    const addToFavourite = () => {
        addFavourite(film.id)
    }

    const removeFromFavourite = () => {
        removeFavourite(film.id)
    }

    return (
        <div
            className="rounded-lg shadow-lg bg-white w-96 block p-6 mb-15 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <a href={`/card/${film.id}`} className="bg-blue-300">
                <div
                    className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" style={{
                        height: '500px', width: "100%",
                        backgroundImage: `url(${film.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover",
                        backgroundPosition: 'center'
                    }}>
                </div>
            </a>
            <div className="justify-between pt-5">
                <div className="h-10">
                    <a href={`/card/${film.id}`}
                        className="hover:text-purple-500 text-gray-400 font-semibold h-45">{film.title}</a></div>
                <div className="flex justify-content space-x-10 px-4 pt-4">
                    <Link key={film.id} to={`/card/${film.id}`}>
                        <button type="button"
                            className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Description
                        </button>
                    </Link>
                    {!isFav && <button type="button" onClick={addToFavourite}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="#f94144" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    }
                    {isFav && <button type="button" onClick={removeFromFavourite}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#f94144" viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#f94144" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}
