import React, { useState, useEffect, useContext } from 'react';
import {useNavigate} from "react-router-dom";

const AuthContext = React.createContext();

const predefinedUsers = [
    { id: 1, username: 'Rivo', password: '1234', email: 'rivo@example.com', firstName: 'Rivo', lastName: 'Orulepa', role: 'user' },
    { id: 2, username: 'Sander', password: '1234', email: 'sander@example.com', firstName: 'Sander', lastName: 'Valdmaa', role: 'user' },
    { id: 3, username: 'Tormi', password: '1234', email: 'tormi@example.com', firstName: 'Tormi', lastName: 'Tulvik', role: 'user' },
    { id: 4, username: 'Admin', password: 'admin', email: 'admin@example.com', firstName: 'Admin', lastName: '', role: 'admin' }
];

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedToken && storedUser) {
            setAuthenticated(true);
            setUserData(storedUser);
        }
    }, []);

    const loginWithEmail = (email, password) => {
        // Simulating login with provided username and password
        const userToLogin = predefinedUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (userToLogin) {
            const newToken = generateNewToken(userToLogin.id);

            setAuthenticated(true);
            setUserData(userToLogin);

            // Store the new token and user data in localStorage
            localStorage.setItem('token', newToken);
            localStorage.setItem('user', JSON.stringify(userToLogin));

            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setAuthenticated(false);
        setUserData(null);

        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    const generateNewToken = (userId) => {
        return `newToken_${userId}_${Math.random().toString(36).substring(7)}`;
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                userData,
                loginWithEmail,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};