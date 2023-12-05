import React from 'react';
import "./BroneerimisPage.css"
import "../Login/Login.css"
import RoundedButton from "../../components/buttons/RoundedButton";
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const BroneerimisPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header title="Broneeri" homeIcon={true}/>
            <h2 align="center">Welcome to Klubi 2!</h2>
            <p align="center">
                <RoundedButton
                    text={"Avalehele tagasi!"}
                    onClick={()=> navigate("/")}
                />
            </p>
            <table align="center">
                <tbody>
                    <tr>
                        <th bgcolor="#ffb6c1">
                            <RoundedButton
                                text={"Klubi 1"}
                                onClick={()=> navigate("/Klubi1")}
                            />
                        </th>
                        <th bgcolor="#FFEEFD">
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
            <table align="center">
                <tbody>
                <tr>
                    <th> </th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                </tr>
                <tr>
                    <td>8:00</td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>8:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>9:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>9:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>10:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>10:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>11:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>11:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>12:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>12:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>13:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>13:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>14:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>14:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#f08080"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>15:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>15:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>16:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>16:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>17:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>17:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>18:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>18:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>                <tr>
                    <td>19:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>19:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>20:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>21:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>21:30</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                <tr>
                    <td>22:00</td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="#adff2f"><button1>+</button1></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                    <td bgcolor="lightcoral"><broneeritud>Broneeritud</broneeritud></td>
                </tr>
                </tbody>
            </table>
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