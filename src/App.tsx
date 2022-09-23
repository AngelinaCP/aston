import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {CardPage} from "./pages/CardPage";
import {Navigation} from "./components/Navigation";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {AuthContext, AuthProvider} from "./components/AuthContext";
import {History} from "./pages/History";

function App() {
    const value = useContext(AuthContext)
    const auth = value?.auth;
    return (
        <>
            <ErrorBoundary>
                <Routes>
                    <Route path='/' element={<Navigation/>}>
                        <Route index element={ <HomePage />}/>
                        <Route path="/sign-in" element={<SignIn/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                        <Route
                            path="/favourites"
                            element={auth?.getAuth ? <FavouritesPage/> : <Navigate to="/sign-in"/>}
                        />
                        <Route
                            path="/history"
                            element={auth?.getAuth ? <History/> : <Navigate to="/sign-in"/>}
                        />
                        <Route path="/card/:id" element={<CardPage/>}/>
                    </Route>
                </Routes>
            </ErrorBoundary>
        </>

    );
}

export default App;
