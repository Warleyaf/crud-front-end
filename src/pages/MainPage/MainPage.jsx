import React from "react";
import { useState } from 'react'
import { useEffect } from "react";

import { Nav } from "./Nav";
import { Search } from "./Search";

import './MainPage.css';
import { Repositories } from "./Repositories";

import { getRepositories } from "../../services/api";

const userId = '62b9be499bfec0d2626c3efc'

export function MainPage() {
   const [repositories, setRepositories] = useState([])

   const loadData = async (query = '') => {
      const response = await getRepositories(userId);

      console.log(response.data)

      setRepositories(response.data)
   }

   useEffect(() => {
      // essa função aqui meio que é um shortcode
      (async() => await loadData())();
   }, []);

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
            repositories={repositories}
            onDeleteRepo={handleDeleteRepo}
            onNewRepo={handleNewRepo}  
         />


      </div>
   )
}