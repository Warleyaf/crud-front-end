import React from "react";
import { useState } from "react";

import './LoginPage.css';

export function LoginPage() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleLogin = () => {
      console.log('Email', email);
      console.log('Password', password);
      console.log('Clicando em login')
   }

   return(
      <div id="login">
         <div className="title"><h1>Login</h1></div>
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