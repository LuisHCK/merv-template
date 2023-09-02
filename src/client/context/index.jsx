import { createContext, useEffect, useState } from 'react'

const intialState = {
    currentUser: null,
    setCurrentUser: () => {}
}

const storedUser = localStorage.getItem('currentUser')

export const AppContext = createContext(intialState)

export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(storedUser ? JSON.parse(storedUser) : undefined)

    return (
        <AppContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AppContext.Provider>
    )
}
