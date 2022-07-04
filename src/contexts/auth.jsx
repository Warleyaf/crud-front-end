import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   return (
      <AuthContext.Provider
         value={{
            userId: '123',
            user: {
               email: 'warley@gmail.com'}
         }
      }>
      {children} {/* o children serve para eu representar quem eu envolvi entre o AuthContext, que no caso vai ser o AppRoutes */}
      </AuthContext.Provider>
   )
}
