import React, {useEffect, useState} from 'react'
import {useGetBestFilmsQuery, useSearchFilmsQuery} from "../store/films/films.api";
import {useDebounce} from "../hooks/debounce";
import {FilmCard} from "../components/FilmCard";
import {useNavigate} from "react-router-dom";
import {Pagination} from "../components/Pagination";
import {HK} from "../utils/utils";
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";

export function HomePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search);
    const {isLoading, isError, data} = useSearchFilmsQuery(debounced, {
        skip: debounced.length < 3,
    });
    const {isLoading: bestFilmsLoading, isError: bestFilmsError, data: bestFilms} = useGetBestFilmsQuery();
    const navigate = useNavigate();
    const dropDown = Boolean(debounced.length > 3 && data?.length! > 0)
    const {addHistory} = useActions()
    const {history} = useAppSelector(state => state.films)
    const clickHandler = (id: string) => {
        addHistory(id)
        // localStorage.setItem(HK, JSON.stringify([...history, id]));
        navigate(`/card/${id}`)
    }
    //for pagination
    const postPerPage = 12;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = bestFilms?.slice!(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
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
            <h3 className="text-center text-3xl font-bold mb-8">Top 250 films</h3>
            <div className=" container mt-5  justify-center pt-5 mx-auto h-screen w-screen">
                {bestFilmsLoading && <p className="text-center">Films are loading</p>}
                <div className="block mb-6 text-center">
                    <Pagination currentPage={currentPage} postsPerPage={postPerPage} totalPosts={bestFilms?.length!}
                                paginate={paginate}/>
                </div>
                <div className="justify-center flex-wrap flex-initial flex gap-6">
                    {currentPosts && currentPosts.map(film => <FilmCard film={film} key={film.id}/>)}
                </div>
                <div className="block mt-10 mb-20 text-center ">
                    <Pagination currentPage={currentPage} postsPerPage={postPerPage} totalPosts={bestFilms?.length!}
                                paginate={paginate}/>
                </div>
            </div>
        </div>
    )
}
