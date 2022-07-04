import React from "react";

import { Nav } from "./Nav";
import { Search } from "./Search";

import './MainPage.css';
import { Repositories } from "./Repositories";

export function MainPage() {

   const handleLogout = () => {
      console.log('Logout')
   }

   const handleSearch = (query) => {
      console.log('query', query);
   }

   const handleDeleteRepo = (repository) => {
      console.log('delete repo', repository);
   }

   const handleNewRepo = (url) => {
      console.log('new Repo', url);
   }

   return(
      <div id="main">
         <Nav onLogout={handleLogout}/>
         <Search 
            onSearch={handleSearch}
         />

         <Repositories 
            repositories={[]}
            onDeleteRepo={handleDeleteRepo}
            onNewRepo={handleNewRepo}  
         />


      </div>
   )
}