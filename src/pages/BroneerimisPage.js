import React from 'react';
import "./BroneerimisPage.css"
const BroneerimisPage = () => {
    return (
        <div>
            <h1>Broneerimine</h1>
            <p>Welcome to broneerimine!</p>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <a href="https://goldenclub.ee/online-broneerimine/" target="_blank">Klubi 1</a>
                        </th>
                        <th>
                            <a href="https://tallinktennisekeskus.ee/et/tennis/" target="_blank">Klubi 2</a>
                        </th>
                        <th>
                            <a href="https://tenniseklubi.ee/?site#broneerimine" target="_blank">Klubi 3</a>
                        </th>
                        <th>
                            <a href="https://laagritennis.ee/broneeri/" target="_blank">Klubi 4</a>
                        </th>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <table>
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
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                    <td>Broneeritud</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BroneerimisPage;