import React from 'react';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavouritesPage} from "./pages/FavouritesPage";
import {Navigation} from "./components/Navigation";

function App() {
  return (
      <>
          <Navigation/>
          <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/favourites" element={<FavouritesPage/>}></Route>
          </Routes>
      </>

  );
}

export default App;
