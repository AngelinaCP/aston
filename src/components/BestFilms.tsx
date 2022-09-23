import React, {useState} from "react";
import {useGetBestFilmsQuery} from "../store/films/films.api";
import {Pagination} from "./Pagination";
import {FilmCard} from "./FilmCard";

export function BestFilms() {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 12;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const {isLoading: bestFilmsLoading, data: bestFilms} = useGetBestFilmsQuery();
    const currentPosts = bestFilms?.slice!(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    return (
        <>
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
        </>
    )
}