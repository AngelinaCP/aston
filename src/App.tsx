import React from 'react';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {CardPage} from "./pages/CardPage";
import {Navigation} from "./components/Navigation";

function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/favourites" element={<FavouritesPage/>}/>
              <Route path="/card/:id" element={<CardPage/>}/>
          </Routes>
      </>

  );
}

export default App;
