import React, { useState } from 'react';
import LoginPage from './pages/LoginPage'; // Import your LoginPage component
import MainPage from './pages/MainPage'; // Import your MainPage component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        console.log('handleLogin called');
        if (email === "rivo@gmail.com" && password === "1234") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <MainPage />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;