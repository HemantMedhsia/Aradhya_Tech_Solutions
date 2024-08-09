import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { authToken } = useAuth();
    // alert("My token: " + authToken);

    if (authToken === undefined) {
        return <div>Loading...</div>;
    }

    if (!authToken) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
