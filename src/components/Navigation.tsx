import React from 'react'
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bd-gray-500 text-black">
            <Link to={`/`}>
                <h3 className="font-bold">Film search</h3>
            </Link>

            <span>
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
        </nav>
    )
}
