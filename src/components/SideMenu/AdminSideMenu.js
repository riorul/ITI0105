import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as AdminProfile } from '../../assets/admin/adminProfile.svg';
import './AdminSideMenu.css';
import './CommonSideMenu.css';

const AdminSideMenu = ({ isOpen }) => {
    const navigate = useNavigate();
    const sideMenuRef = useRef();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div ref={sideMenuRef} className={`side-menu admin ${isOpen ? 'open' : ''}`}>
            <div className="admin-profile-container">
                <AdminProfile className="admin-profile-picture" />
                <h3 className="admin-user">ADMIN</h3>
            </div>

            <div className="navigation-side-menu">
                <div>
                    <div
                        className="clickable-area side-menu-buttons text-container"
                        onClick={() => handleNavigation('/admin/kasutajad')}
                    >
                        Kasutajad
                    </div>
                    <div
                        className="clickable-area side-menu-buttons text-container"
                        onClick={() => handleNavigation('/admin/andmed')}
                    >
                        Andmed
                    </div>
                </div>

                <div
                    className="clickable-area side-menu-buttons text-container"
                    onClick={() => handleNavigation('/login')}
                >
                    Logi välja
                </div>
            </div>
        </div>
    );
};

export default AdminSideMenu;