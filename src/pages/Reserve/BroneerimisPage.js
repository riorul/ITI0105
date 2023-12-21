import React from 'react';
import "./BroneerimisPage.css"
import "../Login/Login.css"
import Header from '../../components/Header/UserHeader';
import Footer from '../../components/Footer/Footer'
import RoundedButton from "../../components/Buttons/RoundedButton";
import { useNavigate } from 'react-router-dom';
import UserDetails from "../../components/ReserveRow/ReserveRow";
const BroneerimisPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header title="Broneeri" homeIcon={true}/>
            <h2 align="center">Welcome to Klubi 1!</h2>
            <p align="center">
                <RoundedButton
                    text={"Avalehele tagasi!"}
                    onClick={()=> navigate("/")}
                />
            </p>
            <table align="center">
                <tbody>
                    <tr>
                        <th bgcolor="#FFEEFD">
                            <RoundedButton
                                text={"Klubi 1"}
                                onClick={()=> navigate("/Klubi1")}
                            />
                        </th>
                        <th bgcolor="#ffb6c1">
                            <RoundedButton
                                text={"Klubi 2"}
                                onClick={()=> navigate("/Klubi2")}
                            />
                        </th>
                        <th bgcolor="#ffb6c1">
                            <RoundedButton
                                text={"Klubi 3"}
                                onClick={()=> navigate("/Klubi3")}
                            />
                        </th>
                        <th bgcolor="#ffb6c1">
                            <RoundedButton
                                text={"Klubi 4"}
                                onClick={()=> navigate("/Klubi4")}
                            />
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
                <RoundedButton
                    text={"Kinnita!"}
                />
            </p>
            <br></br>
            <br></br>
            <Footer />
        </div>
    );
};

export default BroneerimisPage;