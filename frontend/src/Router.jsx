import React from "react";
import { Route, Routes,BrowserRouter as Routers } from "react-router-dom";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Places from "./containers/Places";


const Router = () => {
  return (
    
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </Routers>
    
  );
};
export default Router;
