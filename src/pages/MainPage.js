import React, { useState } from "react";
import Header from '../components/Header';

const MainPage = ({ onLogout }) => {
    const [loggedIn, setLoggedIn] = useState(true);

    const handleLogout = () => {
        // Simulate a logout action (you can replace this with your actual logout logic)
        // For now, we'll simulate a logout by changing the logged-in state.
        setLoggedIn(false);
        onLogout(); // You can add your actual logout logic here.
    };

    return (


        <div>
            <Header />
        </div>
    );
};

export default MainPage;
