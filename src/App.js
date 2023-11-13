import React, { useState } from 'react';
import LoginPage from './pages/LoginPage'; // Import your LoginPage component
import MainPage from './pages/MainPage'; // Import your MainPage component
import RegisterPage from './pages/RegisterPage';
import BroneerimisPage from "./pages/BroneerimisPage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [wantsToRegister, setWantsToRegister] = useState(false);

    const handleLogin = (email, password) => {
        console.log('handleLogin called');
        if (email === "rivo@gmail.com" && password === "1234") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };
    const handleWantsToRegister = (value) => {
        setWantsToRegister(value);
    }
    const handleRegister = (email, password, passwordConfirmation) => {
        if (passwordConfirmation === password && password !== "") {
            setIsLoggedIn(true);
        } else {
            alert("Passwords don´t match");
        }
    };
    return (
        <div>
            {isLoggedIn ? (
                <BroneerimisPage />
            ) : wantsToRegister ? (
                <RegisterPage onRegister={handleRegister}/>
            ) : (
                <LoginPage onLogin={handleLogin} onWantsToRegister={handleWantsToRegister} />
            )}
        </div>
    );
};

export default App;