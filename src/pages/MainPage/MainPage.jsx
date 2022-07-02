import React from "react";

import { Nav } from "./Nav";
import { Search } from "./Search";

import './MainPage.css';

export function MainPage() {

   const handleLogout = () => {
      console.log('Logout')
   }

   const handleSearch = (query) => {
      console.log('query', query);
   }

   const handleDeleteRepo = () => {
      console.log('delete repo');
   }

   return(
      <div id="main">
         <Nav onLogout={handleLogout}/>
         <Search 
            onSearch={handleSearch}
         />

         <div className="repositories">
            <h2 className="title">Repositórios</h2>

            <ul className="list">
               <li className="item">
                  <div className="info">
                     <div className="owner">facebook</div>
                     <div className="name">react</div>
                  </div>
                  <button onClick={handleDeleteRepo}>Apagar</button>
               </li>
            </ul>

            <div className="new">
               <label htmlFor="new-repo">Novo Repo:</label>
               <input type="url" name="new-repo" id="new-repo"/>
               <button>Adicionar</button>
            </div>
         </div>

      </div>
   )
}