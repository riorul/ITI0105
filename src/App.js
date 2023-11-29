import { Routes, Route } from "react-router-dom";
import './index.css';
import LoginPage from './pages/Login/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/Register/RegisterPage';
import BroneerimisPage from "./pages/Reserve/BroneerimisPage";
import CourtsPage from "./pages/Courts/CourtsPage";

const App = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/broneerimine" element={<BroneerimisPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/staadionid" element={<CourtsPage />} />
        </Routes>

    );
};

export default App;