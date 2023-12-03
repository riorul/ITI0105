import React from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import './index.css';

import MainPage from './pages/MainPage/MainPage';
import BroneerimisPage from "./pages/Reserve/BroneerimisPage";
import CourtsPage from "./pages/Courts/CourtsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import AdminUserPage from "./pages/Admin/AdminUserPage";
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import {useAuth} from "./auth/AuthProvider";

const App = () => {
    const { authenticated } = useAuth();
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
            <Route path="/admin-view" element={<AdminUserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default App;