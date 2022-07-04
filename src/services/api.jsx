//instalar axios uso o yarn add axios
import axios from 'axios'

// configuração básica para fazer conexão da api
export const api = axios.create({
   baseURL: 'http://localhost:5000',
})

export const getRepositories = async(userId, query) => {
   let url = `/users/${userId}/repositories/`

   if(query !== '') {
      url += `?q=${query}`;
   }

   return api.get(url);
}

// método para criar o repo no front

export const createRepository = async (userId, repositoryUrl) => {
   const url = `/users/${userId}/repositories`;

   return api.post(url, {name: 'facebook/react', url: repositoryUrl});
}