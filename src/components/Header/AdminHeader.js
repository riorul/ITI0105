import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSVG from '../../assets/header/MenuSVG';
import HomeSVG from '../../assets/header/HomeSVG';
import AdminSideMenu from '../SideMenu/AdminSideMenu';
import './HeaderAdmin.css';
import './HeaderCommon.css';
import useOutsideClick from '../../hooks/useOutsideClick';

const AdminHeader = ({ title }) => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const adminHeaderRef = useRef();

    useOutsideClick(adminHeaderRef, () => setMenuOpen(false));

    const handleHover = (stateSetter) => () => stateSetter(true);
    const handleLeave = (stateSetter) => () => stateSetter(false);
    const handleClick = (action) => (e) => {
        e.stopPropagation();
        action();
    };
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header ref={adminHeaderRef}>
            <div className="header-text admin">
                <div
                    className="menu-container"
                    onClick={handleClick(toggleMenu)}
                    onMouseEnter={handleHover(setIsMenuHovered)}
                    onMouseLeave={handleLeave(setIsMenuHovered)}
                >
                    <MenuSVG hovered={isMenuHovered} isAdmin={true} />
                </div>

                <div className="title-container text-style">{title}</div>

                <div className="search-container text-style">
                    <div
                        onClick={handleClick(() => navigate('/'))}
                        className="home-link"
                        onMouseEnter={handleHover(setIsHomeHovered)}
                        onMouseLeave={handleLeave(setIsHomeHovered)}
                    >
                        <HomeSVG hovered={isHomeHovered} isAdmin={true} />
                    </div>
                </div>
            </div>
            <AdminSideMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false) } />
        </header>
    );
};

export default AdminHeader;