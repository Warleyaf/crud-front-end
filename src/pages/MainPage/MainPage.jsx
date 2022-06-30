import React from "react";

import './MainPage.css';

export function MainPage() {

   const handleLogout = () => {
      console.log('Logout')
   }

   const handleSearch = (query) => {
      console.log('query', query);
   }

   const handleClear = () => {
      console.log('clear');
   }

   return(
      <div id="main">
         <div className="nav">
            <h1 className="logo">SisRepo</h1>
            <button onClick={handleLogout}>Sair</button>
         </div>

         <div className="search">
            <label htmlFor="query">Procurar</label>
            <input type="search" name="query" id="query" />
            <button onClick={handleClear}>Limpar</button>
            <button onClick={handleSearch}>Procurar</button>
         </div>


      </div>
   )
}