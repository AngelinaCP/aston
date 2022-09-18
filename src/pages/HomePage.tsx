import React, {useEffect, useState} from 'react'
import {useGetBestFilmsQuery, useSearchFilmsQuery} from "../store/films/films.api";
import {useDebounce} from "../hooks/debounce";
import {FilmCard} from "../components/FilmCard";
import {Outlet, useNavigate} from "react-router-dom";
import {Pagination} from "../components/Pagination";

export function HomePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showSearchedCard, setShowSearchedCards] = useState(false)
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search);
    const {isLoading, isError, data} = useSearchFilmsQuery(debounced, {
        skip: debounced.length < 3,
    });
    const {isLoading: bestFilmsLoading, isError: bestFilmsError, data: bestFilms} = useGetBestFilmsQuery();
    const [dropDown, setDropdown] = useState(debounced.length > 3 && data?.length! > 0);
    const navigate = useNavigate();
    // const [fetchFilms, {isLoading: loadingFilms, data: films}] = useLazyGetFilmDescriptionQuery();
    const clickHandler = (id: string) => {
        navigate(`/card/${id}`)
    }
    //for pagination
    const postPerPage = 12;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = bestFilms?.slice!(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    useEffect(() => {
        setDropdown(Boolean(debounced));
        setShowSearchedCards(false)
    }, [debounced])

    const handleClickRedirect = () => {
        // setShowSearchedCards(true)
        setDropdown(false)
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
                               onChange={e => setSearch(e.target.value)}/>
                        <button
                            onClick={() => handleClickRedirect()}
                            className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                            type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                                 className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                        {isError && <p className="text-center text-red-600">Something went wrong...</p>}
                        {dropDown &&
                            <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
                                {/*{isLoading && <p className='text-center'>Loading...</p>}*/}
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
            {!showSearchedCard && <div className="container mt-5 flex justify-center pt-5 mx-auto h-screen w-screen">
                {isLoading && <p className="text-center">Films are loading</p>}
                <div className="flex justify-center flex-wrap flex-initial gap-6">
                    {data?.map(film => <FilmCard film={film} key={film.id}/>)}
                </div>
            </div>}

            {/*{!showSearchedCard && <div className="container mt-5 flex justify-center pt-5 mx-auto h-screen w-screen">*/}
            {/*    {bestFilmsLoading && <p className="text-center">Films are loading</p>}*/}
            {/*    <div className="flex  justify-center flex-wrap flex-initial gap-6">*/}
            {/*        {currentPosts && currentPosts.map(film => <FilmCard film={film} key={film.id}/>)}*/}
            {/*        <Pagination currentPage={currentPage} postsPerPage={postPerPage} totalPosts={bestFilms?.length!} paginate={paginate}/>*/}
            {/*    </div>*/}
            {/*</div>}*/}
        </div>
    )
}
