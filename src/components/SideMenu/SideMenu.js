import React, { useEffect, useRef } from 'react';
import './SideMenu.css';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/defaultPfp.svg';
import { useAuth } from "../../auth/AuthProvider";

const SideMenu = ({ isOpen, onClose }) => {
    const { userData, logout } = useAuth();
    const navigate = useNavigate();
    const sideMenuRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <div ref={sideMenuRef} className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="profile-picture">
                <img
                    src={defaultImage}
                    alt="Profile Picture"
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                    onClick={() => navigate("/profiil")}
                />
            </div>

            <div className="text-container side-menu-buttons">
                Tere, {userData?.username}
            </div>

            <div className="navigation-side-menu">
                <div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/broneerimine")}>
                        Broneeri
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/staadionid")}>
                        Staadionid
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/kalender")}>
                        Kalender
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/treeningpartner")}>
                        Treeningpartner
                    </div>
                </div>
                <div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/seaded")}>
                        Seaded
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => navigate("/feedback")}>
                        Tagasiside
                    </div>
                    <div className="clickable-area side-menu-buttons text-container" onClick={() => logout()}>
                        Logi välja
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;