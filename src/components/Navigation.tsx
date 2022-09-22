import React, {useContext} from 'react'
import {Outlet} from "react-router-dom";
import {AuthContext} from "./AuthContext";

export function Navigation() {
    const value = useContext(AuthContext);
    const auth = value?.auth;
    return (
        <>
            <nav
                className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 border-b border-gray-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FilmSearch</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {auth?.getAuth && <li>
                                <a href="/"
                                   className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                   aria-current="page">Hi {auth?.name}!</a>
                            </li>}
                            <li>
                                <a href="/"
                                   className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                   aria-current="page">Home</a>
                            </li>
                            {!auth?.getAuth && <>
                                <li>
                                    <a href="/sign-in"
                                       className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                       aria-current="page">Sign In</a>
                                </li>
                                <li>
                                    <a href="/sign-up"
                                       className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                       aria-current="page">Sign Up</a>
                                </li>
                            </>}
                            {auth?.getAuth && <>
                                <li>
                                    <a href="/favourites"
                                       className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Favourites</a>
                                </li>
                                <li>
                                    <a href="/history"
                                       className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">History</a>
                                </li>
                                <li>
                                    <a href="/"
                                       onClick={value?.logout}
                                       className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign
                                        Out</a>
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
