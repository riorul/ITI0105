import React from 'react';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div onClick={() => navigate("/login")}>Login</div>
            <div onClick={() => navigate("/broneerimine")}>Broneeri</div>
            <div onClick={() => navigate("/staadionid")}>Staadionid</div>
            <div onClick={() => navigate("/seaded")}>Seaded</div>
            <div onClick={onClose}>Close Menu</div>
        </div>
    );
};

export default SideMenu;