import React from "react";
import { useState } from 'react'
import { useEffect } from "react";

import { Nav } from "./Nav";
import { Search } from "./Search";

import './MainPage.css';
import { Repositories } from "./Repositories";

import { getRepositories, createRepository } from "../../services/api";

import { Link } from "react-router-dom";

//================================================================================//

const userId = '62b9be499bfec0d2626c3efc'

export function MainPage() {
   const [repositories, setRepositories] = useState([])
   const [loading, setLoading] = useState(true);
   const [loadingError, setLoadingError] = useState(false);

   const loadData = async (query = '') => {
      try {
         setLoading(true);
         const response = await getRepositories(userId);
         setRepositories(response.data)
         setLoading(false)
         
      } catch (error) {
         console.log(err);
         setLoadingError(true);
      }

      
   }

   useEffect(() => {
      // essa função aqui meio que é um shortcode
      (async () => await loadData())();
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

   const handleNewRepo = async (url) => {
      console.log('new Repo', url);
      try {
         await createRepository(userId, url);
         await loadData();
      } catch (err) {
         console.error(err);
         setLoading(true)
      }
   }

   if (loadingError) {
      return(
         <div className="loading">
            Erro ao carregar os dados de repositório. <Link to="/login">Voltar</Link>.
         </div>
      )
   }

   if (loading) {
      return(
         <div className="loading">
            Carregando...
         </div>
      )
   }


   return (
      <div id="main">
         <Nav onLogout={handleLogout} />
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