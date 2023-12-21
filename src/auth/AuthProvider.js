import React, {useContext, useEffect, useState} from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const storedSalt = "$2a$10$Xp9REk7RxB165tdgduz.E."
    const bcrypt = require('bcryptjs');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedToken && storedUser) {
            setAuthenticated(true);
            setUserData(storedUser);
        }
    }, []);

    const getAllUserData = () => {
        return JSON.parse(localStorage.getItem('predefinedUsers'));
    };

    const deleteUser = (userID) => {
        const storedUsers = getAllUserData();
        const userIndex = storedUsers.findIndex(user => user.id === userID);

        if (userIndex !== -1) {
            storedUsers.splice(userIndex, 1);

            localStorage.setItem('predefinedUsers', JSON.stringify(storedUsers));
            if (userData && userData.id === userID) {
                logout();
            }
        }
    };

    const getUserDataById = (userId) => {
        const storedUsers = getAllUserData();
        return storedUsers.find(user => user.id === userId) || null;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const loginWithEmail = async (email, password) => {
        const storedUsers = JSON.parse(localStorage.getItem('predefinedUsers'));

        const userToLogin = storedUsers.find((user) => user.email === email);
        if (userToLogin) {
            const isPasswordCorrect = await checkPassword(password, userToLogin.password);
            if (isPasswordCorrect) {
                const newToken = generateNewToken(userToLogin.id);

                setAuthenticated(true);
                setUserData(userToLogin);

                // Store the new token and user data in localStorage
                localStorage.setItem('token', newToken);
                localStorage.setItem('user', JSON.stringify(userToLogin));
                localStorage.setItem("status", "Online")
                return true;
            }
        }
        return false;

    };

    const register = async (newUserData) => {
        const storedUsers = JSON.parse(localStorage.getItem('predefinedUsers'));
        const isEmailTaken = storedUsers.some(user => user.email === newUserData.email);

        if (isEmailTaken) {
            return false;
        }

        const newUser = {
            id: storedUsers.length + 1,
            password: await generateHash(newUserData.password),
            email: newUserData.email,
            firstName: capitalizeFirstLetter(newUserData.firstName),
            lastName: capitalizeFirstLetter(newUserData.lastName),
            username: capitalizeFirstLetter(newUserData.firstName),
            role: 'user',
        };

        storedUsers.push(newUser);
        localStorage.setItem('predefinedUsers', JSON.stringify(storedUsers));
        return true;
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

    const checkPassword = async (enteredPassword, storedHash) => {
        const hashToCheck = await bcrypt.hash(enteredPassword, storedSalt);
        return hashToCheck === storedHash;
    };

    const generateHash = async (password) => {
        const hash = await bcrypt.hash(password, storedSalt);
        return hash
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                userData,
                register,
                loginWithEmail,
                logout,
                getAllUserData,
                generateHash,
                deleteUser,
                getUserDataById
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

const predefinedUsers = [
    { id: 1, username: 'Rivo', password: "$2a$10$Xp9REk7RxB165tdgduz.E.NsQJUda6s2HzAFsan5Uxd7ja/vECVNK",
        email: 'rivo@example.com', firstName: 'Rivo', lastName: 'Orulepa', role: 'user', status: "Offline",
        lastOnline: "21.12.2023", dob: "19.02.1200", phoneNumber: "123456789123" },
    { id: 2, username: 'Sander', password: '$2a$10$Xp9REk7RxB165tdgduz.E.NsQJUda6s2HzAFsan5Uxd7ja/vECVNK',
        email: 'sander@example.com', firstName: 'Sander', lastName: 'Valdmaa', role: 'user', status: "Offline",
        lastOnline: "21.12.2023", dob: "19.02.1200", phoneNumber: "123456789123" },
    { id: 3, username: 'Tormi', password: '$2a$10$Xp9REk7RxB165tdgduz.E.NsQJUda6s2HzAFsan5Uxd7ja/vECVNK',
        email: 'tormi@example.com', firstName: 'Tormi', lastName: 'Tulvik', role: 'user', status: "Offline",
        lastOnline: "21.12.2023", dob: "19.02.1200", phoneNumber: "123456789123" },
    { id: 4, username: 'Admin', password: '$2a$10$Xp9REk7RxB165tdgduz.E.yVjLv.fIWhz57dBNZjW9YYu1jxJllaW',
        email: 'admin@example.com', firstName: 'Admin', lastName: '', role: 'admin', status: "Online",
        lastOnline: "21.12.2023", dob: "19.02.1200", phoneNumber: "123456789123" }
];

localStorage.setItem('predefinedUsers', JSON.stringify(predefinedUsers));