import { Routes, Route } from "react-router-dom";
import './index.css';
import LoginPage from './pages/Login/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/Register/RegisterPage';
import BroneerimisPage from "./pages/Reserve/BroneerimisPage";
import CourtsPage from "./pages/Courts/CourtsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import BroneerimisPageKlubi2 from "./pages/Reserve/BroneerimisPageKlubi2";
import BroneerimisPageKlubi3 from "./pages/Reserve/BroneerimisPageKlubi3";
import BroneerimisPageKlubi4 from "./pages/Reserve/BroneerimisPageKlubi4";

const App = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/broneerimine" element={<BroneerimisPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/staadionid" element={<CourtsPage />} />
            <Route path="/Klubi1" element={<BroneerimisPage />} />
            <Route path="/Klubi2" element={<BroneerimisPageKlubi2 />} />
            <Route path="/Klubi3" element={<BroneerimisPageKlubi3 />} />
            <Route path="/Klubi4" element={<BroneerimisPageKlubi4 />} />
        </Routes>

    );
};

export default App;