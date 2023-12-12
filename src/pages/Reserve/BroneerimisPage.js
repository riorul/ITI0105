import React from 'react';
import "./BroneerimisPage.css"
import MainPage from "../MainPage/MainPage";
import "../Login/Login.css"
import UserDetails from "../../components/ReserveRow/ReserveRow";
const BroneerimisPage = () => {
    return (
        <div>
            <h1 align="center">Broneerimine</h1>
            <p align="center">Welcome to Klubi1!</p>
            <p align="center">
                <a href={MainPage} target={"_blank"}>
                    <button>Avalehele tagasi!</button>
                </a>
            </p>
            <table align="center">
                <tbody>
                    <tr>
                        <th bgcolor="#FFEEFD">
                            <a href="BroneerimisPage.js" target="_blank">Klubi 1</a>
                        </th>
                        <th bgcolor="#ffb6c1">
                            <a href="BroneerimisPageKlubi2.js" target="_blank">Klubi 2</a>
                        </th>
                        <th bgcolor="#ffb6c1">
                            <a href="BroneerimisPageKlubi3.js" target="_blank">Klubi 3</a>
                        </th>
                        <th bgcolor="#ffb6c1">
                            <a href="BroneerimisPageKlubi4.js" target="_blank">Klubi 4</a>
                        </th>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <br></br>
            <UserDetails useState={0} />
            <UserDetails userData={0} />
            <br></br>
            <br></br>
            <p align="center">
                <button>Kinnita!</button>
            </p>

            <br></br>
            <br></br>
        </div>
    );
};

export default BroneerimisPage;