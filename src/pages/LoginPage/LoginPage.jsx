import React from "react";

import './LoginPage.css';

export function LoginPage() {

   const handleLogin = () => {
      console.log('Clicando em login')
   }

   return(
      <div id="login">
         <div className="title"><h1>Login</h1></div>
         <div className="form">
            <div className="field">
               <label htmlFor="email">Email:</label>
               <input type="email" name="email" id="email" />
            </div>

            <div className="field">
               <label htmlFor="password">Senha:</label>
               <input type="password" name="password" id="password" />
            </div>

            <div className="actions">
               <button onClick={handleLogin}>Entrar</button>
            </div>
         </div>
      </div>
   )
}