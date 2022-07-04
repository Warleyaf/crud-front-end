import React from "react"

import { AppRoutes } from './AppRoutes';

import { AuthProvider } from './contexts/auth';
function App() {
  
  return (
    <div>
      <AuthProvider
        value={{userId: '123', 
        user: {
          email: 'warley@gmail.com'
        }}}
        
      >
        <AppRoutes/>
      </AuthProvider>
      
    </div>
  )
}

export default App
