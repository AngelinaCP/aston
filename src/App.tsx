import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {CardPage} from "./pages/CardPage";
import {Navigation} from "./components/Navigation";
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favourites" element={<FavouritesPage/>}/>
                <Route path="/card/:id" element={<CardPage/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
        </>

    );
}

export default App;
