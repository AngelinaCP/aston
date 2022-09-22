import FavouriteCard from "../components/FavouriteCard";
import {useAppSelector} from "../hooks/redux";
import React from "react";

export function History() {
    const {history} = useAppSelector(state => state.films)
    if (history.length === 0) {
        return (
            <p className="center">No history</p>
        )
    }
    console.log(history.map(f => {
        console.log(f)
    }))
    return (
        <div className="justify-center flex-wrap flex-initial flex gap-6">
            {history.map(f => (
                <FavouriteCard key={f} id={f}/>
            ))
            }
        </div>
    )
}