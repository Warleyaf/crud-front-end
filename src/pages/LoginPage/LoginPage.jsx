import React from "react";
import { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { createSession } from "../../services/api";

import './LoginPage.css';

export function LoginPage() {
   const {user} = useContext(AuthContext);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async () => {
      console.log('Email', email);
      console.log('Password', password);
      console.log('Clicando em login')

      const response = await createSession(email, password);
      console.log('login', response.data);
   }

   return(
      <div id="login">
         <div className="title"><h1>Login</h1></div>
         <p>{user.email}</p>
         <div className="form">
            <div className="field">
               <label htmlFor="email">Email:</label>
               <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </div>

            <div className="field">
               <label htmlFor="password">Senha:</label>
               <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>

            <div className="actions">
               <button onClick={handleLogin}>Entrar</button>
            </div>
         </div>
      </div>
   )
}