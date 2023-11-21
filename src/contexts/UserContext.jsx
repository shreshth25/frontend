import React, { useContext, useEffect, useState } from "react"
const UserContext = React.createContext()

const UserContextProvider = ({children})=>{
    const stored_token = localStorage.getItem('token')
    const [token, setToken] = useState(stored_token)
    
    const contextValue = {
        token: token,
        setToken: setToken,
    };
  
    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

const UseUserContext = ()=>{
    return useContext(UserContext)
}

export {UseUserContext, UserContextProvider, UserContext}