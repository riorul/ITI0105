import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'; // Import your LoginPage component
import MainPage from './pages/MainPage'; // Import your MainPage component
import RegisterPage from './pages/RegisterPage';

const App = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
        </Routes>

    );
};

export default App;