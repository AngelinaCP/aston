import React, {createContext, useContext, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {CardPage} from "./pages/CardPage";
import {Navigation} from "./components/Navigation";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {ErrorBoundary} from "./components/ErrorBoundary";
import {AuthContext, AuthProvider} from "./components/AuthContext";

function App() {
    const value = useContext(AuthContext);

    const auth = value?.auth;
    return (
        <>
            <AuthProvider>
            <Navigation/>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>
                    <Route path="/card/:id" element={<CardPage/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                </Routes>
            </ErrorBoundary>
                </AuthProvider>
        </>

    );
}

export default App;
