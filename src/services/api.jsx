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

   const repositoryName = getRepositoryName(repositoryUrl);
   const url = `/users/${userId}/repositories`;

   return api.post(url, {name: repositoryName, url: repositoryUrl});
}

const getRepositoryName = (url) => {
   //https://ihateregex.io/expr/url
   const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;

   const match = url.match(regex);

   if(match[2]) {
      const values = match[2].split('/');

      return `${values[1]}/${values[2]}`;

   }
}