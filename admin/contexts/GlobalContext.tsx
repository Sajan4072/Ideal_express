import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';

interface GloabalInterface {
    user: User
    setUser: (user: User) => void;
}
interface User {
    name: string;
    isLoggedin: boolean;
}
const defaultValueForContext = {
    user: { name: '', isLoggedin: false },
    setUser: () => { }
}

export const useGlobalContext = () => {
    return useContext(Context);
}
const Context = createContext<GloabalInterface | never>(defaultValueForContext);

const GlobalContextProvider = ({ children, loggedUser }: { children: React.ReactNode, loggedUser?: User }) => {


    const [user, setUser] = useState<User>(defaultValueForContext.user);

    useEffect(() => {
        alert('component mount')

        return () => {
            alert("component unmount")
        }
    }, [])
    useEffect(() => {
        setUser(loggedUser!)
    }, [loggedUser])

    const contextValue = { user, setUser }
    return (
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    )
}

export default GlobalContextProvider