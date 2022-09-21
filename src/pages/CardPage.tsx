import {useParams} from "react-router-dom";
import {FilmDescription} from "../components/FilmDescription";

export function CardPage() {
    const {id} = useParams()

    return (
        <>
            <FilmDescription key={id} id={id!}/>
        </>
    )
}