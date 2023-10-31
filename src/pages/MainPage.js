import React, { useState } from "react";

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
            {loggedIn ? (
                <div>
                    <h1>Main Page</h1>
                    <p>Welcome to the main page of your application.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Logged Out</h1>
                    <p>You've been logged out.</p>
                </div>
            )}
        </div>
    );
};

export default MainPage;
