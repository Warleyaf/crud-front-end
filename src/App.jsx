import React from "react"
import { useContext } from "react";

import { AppRoutes } from './AppRoutes';

import { AuthContext } from './contexts/auth';
function App() {
  
  return (
    <div>
      <AuthContext.Provider 
        value={{userId: '123', 
        user: {
          email: 'warley@gmail.com'
        }}}
        
      >
        <AppRoutes/>
      </AuthContext.Provider>
      
    </div>
  )
}

export default App
