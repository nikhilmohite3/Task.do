import { createContext, useState } from "react";
import { useContext } from 'react';

//1. Create a context
export const AuthContext = createContext()

// Create a hook of useAuth, so that others can access all things of this component
export const useAuth = () => useContext(AuthContext);


//2. Share context with rest of the components
export default function AuthProvider({ children }) {

    // Put some state in the context
    const [number, setNumber] = useState(10);
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password) {
        if (username === 'Nikhil' && password === 'password') {
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <div>
            <AuthContext.Provider value={{ number, isAuthenticated, login, logout, username}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
