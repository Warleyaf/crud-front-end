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