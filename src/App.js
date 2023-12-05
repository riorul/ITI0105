import React from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './index.css';

import MainPage from './pages/MainPage/MainPage';
import BroneerimisPage from "./pages/Reserve/BroneerimisPage";
import CourtsPage from "./pages/Courts/CourtsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import BroneerimisPageKlubi2 from "./pages/Reserve/BroneerimisPageKlubi2";
import BroneerimisPageKlubi3 from "./pages/Reserve/BroneerimisPageKlubi3";
import BroneerimisPageKlubi4 from "./pages/Reserve/BroneerimisPageKlubi4";

const App = () => {
    const { authenticated, userData } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!authenticated && window.location.pathname !== "/register") {
            navigate("/login");
        }
    }, [authenticated, navigate]);

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/broneerimine" element={<BroneerimisPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/staadionid" element={<CourtsPage />} />
            <Route path="/Klubi1" element={<BroneerimisPage />} />
            <Route path="/Klubi2" element={<BroneerimisPageKlubi2 />} />
            <Route path="/Klubi3" element={<BroneerimisPageKlubi3 />} />
            <Route path="/Klubi4" element={<BroneerimisPageKlubi4 />} />
        </Routes>

            {authenticated && userData && userData.role === 'admin' ? (
                <Route path="/admin-view" element={<AdminUserPage />} />
            ) : (
                <Route path="/" element={<Navigate to="/" />} />
            )}

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default App;