import { createContext, useState, useEffect } from "react";
import { checkAuth } from "./api/async_functions";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function verifySession() {
            const data = await checkAuth();
            if (data.authenticated) setUser(data.username);
        }
        verifySession();
    }, []);
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}