import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { filmsActions } from "../store/films/films.slice";

const actions = {
    ...filmsActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
