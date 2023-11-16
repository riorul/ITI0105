import React from 'react';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../assets/profile.png';

const SideMenu = ({ isOpen, onClose, userName = "Guest" }) => {
    const navigate = useNavigate();

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="profile-picture">
                <img
                    src={defaultImage}
                    alt="Profile Picture"
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                />
            </div>

            <div className="text-container side-menu-buttons">
                Tere, {userName}
            </div>

            <div className="navigation-side-menu">
                <div className="side-menu-buttons-container">
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/broneeri")}>
                        Broneeri
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/staadionid")}>
                        Staadionid
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/kalender")}>
                        Kalender
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/treeningparter")}>
                        Treeningpartner
                    </div>
                </div>
                <div className="side-menu-buttons-container">
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/seaded")}>
                        Seaded
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/tagasiside")}>
                        Tagasiside
                    </div>

                    {/* Close Menu */}
                    <div className="clickable-area side-menu-buttons text-container" onClick={onClose}>
                        Sulge menüü
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;