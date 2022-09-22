import {useContext} from "react";
import {AuthContext} from "../components/AuthContext";


function FavouritesKey() {
    const {email} = JSON.parse(localStorage.getItem('current_user') as string);
    return 'rfk' + email;
}

function HistoryKey() {
    const {email} = JSON.parse(localStorage.getItem('current_user') as string);
    return 'hk' + email;
}


export const RFK = FavouritesKey()
export const HK = HistoryKey()