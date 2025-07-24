import { useState, useEffect, createContext } from 'react';
import { checkAuth } from '../api/async_functions';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function Authenticate() {
            try {
                const data = await checkAuth();
                setUser(data.user.username);
            } catch (err) {
                console.error("Authentication failed:", err.message);
                setUser(null);
            }
        }

        Authenticate();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}