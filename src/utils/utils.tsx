import {useContext} from "react";
import {AuthContext} from "../components/AuthContext";


function GetKey() {
    const {email} = JSON.parse(localStorage.getItem('current_user') as string);
    console.log(email)
    return 'rfk' + email;
}

export const RFK = GetKey()