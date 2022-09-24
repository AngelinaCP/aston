import { useState } from 'react'
import { useSearchFilmsQuery } from "../store/films/films.api";
import { useDebounce } from "../hooks/debounce";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { BestFilms } from "../components/BestFilms";

export function HomePage() {
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search);
    const { isLoading, isError, data } = useSearchFilmsQuery(debounced, {
        skip: debounced.length < 3,
    });
    const navigate = useNavigate();
    const dropDown = Boolean(debounced.length > 3 && data?.length! > 0)
    const { addHistory } = useActions()
    const clickHandler = (id: string) => {
        addHistory(id)
        navigate(`/card/${id}`)
    }
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex  items-stretch w-full mb-4">
                        <input type="search"
                            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                            value={search}
                            onChange={e => setSearch(e.target.value)} />
                        {isError && <p className="text-center text-red-600">Something went wrong...</p>}
                        {dropDown &&
                            <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                                {isLoading && <p className='text-center'>Loading...</p>}
                                {data?.map(film => (
                                    <li
                                        key={film.id}
                                        onClick={() => clickHandler(film.id)}
                                        className="py-2 px-4 hover:bg-gray-500"
                                    >{film.title}</li>
                                ))}
                            </ul>}
                    </div>
                </div>
            </div>
            <BestFilms />
        </div>
    )
}
