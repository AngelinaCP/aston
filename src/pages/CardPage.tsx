import {useParams} from "react-router-dom";
import {FilmDescription} from "../components/FilmDescription";

export function CardPage() {
    const {id} = useParams()

    return (
        <>
            {/*<h1>hrllo</h1>*/}
            <FilmDescription key={id} id={id!}/>
        </>
    )
}