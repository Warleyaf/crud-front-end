import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";

export function AppRoutes() {
   return(
      <Router>
         <Routes>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/" element={<MainPage/>}/>
         </Routes>
      </Router>
   )
}
