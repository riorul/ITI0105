import React from 'react';
import BroneerimisPage from "./BroneerimisPage";

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <p>Welcome to the main page!</p>
            <a href={BroneerimisPage} target={"_blank"}>
                <button type="button">Broneeri!</button>
            </a>
        </div>
    );
};

export default MainPage;