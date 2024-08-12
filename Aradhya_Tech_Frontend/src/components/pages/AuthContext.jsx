import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        // console.log("Token from localStorage:", token);
    
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
    
                // console.log("Decoded Token:", decodedToken);
                // console.log("Token Expiry:", decodedToken.exp);
                // console.log("Current Time:", currentTime);
    
                if (decodedToken.exp < currentTime) {
                    logout(); // Token expired, log the user out
                } else {
                    setAuthToken(token);
                }
            } catch (error) {
                console.error("Invalid token:", error);
                logout();
            }
        }
    
    }, []);
    

    const login = (token) => {
        setAuthToken(token);
        localStorage.setItem("authToken", token); // Store the token in localStorage
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
