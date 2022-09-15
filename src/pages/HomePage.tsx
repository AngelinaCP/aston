import React, { useEffect, useState } from 'react'
import { useLazyGetFilmDescriptionQuery, useSearchFilmsQuery } from "../store/films/films.api";
import { useDebounce } from "../hooks/debounce";
import { FilmCard } from "../components/FilmCard";

export function HomePage() {
    const [search, setSearch] = useState('');
    const [dropDown, setDropdown] = useState(false);
    const debounced = useDebounce(search);
    const { isLoading, isError, data } = useSearchFilmsQuery(debounced, {
        skip: debounced.length < 3,
    });
    const [fetchFilms, { isLoading: loadingFilms, data: films }] = useLazyGetFilmDescriptionQuery();

    useEffect(() => {
        setDropdown(debounced.length > 3 && data?.length! > 0)
        console.log(debounced, data)
    }, [debounced, data])

    const clickHandler = (id: string) => {
        fetchFilms(id);
        setDropdown(false)
    }

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="text-center text-red-600">Something went wrong...</p>}

            <div className="relative w-[560px]">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Search for films..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {dropDown && <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                    {isLoading && <p className='text-center'>Loading...</p>}
                    {data?.map(film => (
                        <li
                            key={film.id}
                            onClick={() => clickHandler(film.id)}
                            className="py-2 px-4 hover:bg-gray-500"
                        >{film.title}</li>
                    ))}
                </ul>}
                <div className="container">
                    {loadingFilms && <p className="text-center">Films are loading</p>}
                    {data?.map(film => <FilmCard film={film} key={film.id} />)}
                </div>
            </div>

        </div>
    )
}
