import React, {createContext, useEffect, useState} from "react";

interface Auth {
    name: string;
    email: string;
    password: string;
    getAuth: boolean;
}

interface AuthContext {
    auth: Auth;
    setAuth: (state: Auth) => void;
    logout: () => void
    login: (name: string, email: string, password: string, getAuth: boolean) => void;
}

interface Props {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider: React.FC<Props> = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('current_user') as string) || {
        name: '',
        email: '',
        password: '',
        getAuth: false,
    };
    const [auth, setAuth] = useState(initialState);
    useEffect(() => {
        localStorage.setItem('current_user', JSON.stringify(auth))
        localStorage.setItem(auth.email, JSON.stringify(auth))
    }, [auth]);
    const login = (name: string, email: string, password: string, getAuth: boolean) => {
        setAuth({
            name: name,
            email: email,
            password: password,
            getAuth: true
        });
    }

    const logout = () => {
        setAuth({
            name: auth.name,
            email: auth.email,
            password: auth.password,
            getAuth: false
        })
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}

