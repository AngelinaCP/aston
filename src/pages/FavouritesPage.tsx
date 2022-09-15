import React from 'react'
import { useAppSelector } from "../hooks/redux";


export function FavouritesPage() {
    const { favourites } = useAppSelector(state => state.films)

    if (favourites.length === 0) {
        return (
            <p className="center">No items</p>
        )
    }
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul>
                {favourites.map(f => (
                    <li key={f}>
                        <p>{f}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}
