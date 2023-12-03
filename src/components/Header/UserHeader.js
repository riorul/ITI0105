import React, {useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import MenuSVG from '../../assets/header/MenuSVG';
import MagnifierSVG from '../../assets/header/MagnifierSVG';
import HomeSVG from '../../assets/header/HomeSVG';
import UserSideMenu from '../SideMenu/SideMenu';
import "./HeaderUser.css";
import "./HeaderCommon.css";
import useOutsideClick from "../../hooks/useOutsideClick";

const UserHeader = ({ title, homeIcon, username }) => {
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const userHeaderRef = useRef();


    useOutsideClick(userHeaderRef, () => setMenuOpen(false));

    const handleHover = (stateSetter) => () => stateSetter(true);
    const handleLeave = (stateSetter) => () => stateSetter(false);
    const handleClick = (action) => (e) => {
        e.stopPropagation();
        action();
    };
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header ref={userHeaderRef}>
            <svg
                className="background-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320" data-v-44073d32="">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 143.144L34 133.866C69 123.926 137 104.707 206 123.926C274 143.144 343 200.137 411 219.355C480 238.574 549 219.355 617 186.22C686 152.422 754 104.707 823 100.068C891 95.4294 960 133.866 1029 138.505C1097 143.144 1166 114.648 1234 110.009C1303 104.707 1371 123.926 1406 133.866L1440 143.144V0H1406C1371 0 1303 0 1234 0C1166 0 1097 0 1029 0C960 0 891 0 823 0C754 0 686 0 617 0C549 0 480 0 411 0C343 0 274 0 206 0C137 0 69 0 34 0H0V143.144Z" fill="url(#paint0_linear_0_1)" fillOpacity="0.6"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 253L30 243.244C60 234.139 120 215.278 180 206.172C240 196.416 300 196.416 360 173.003C420 149.589 480 102.761 540 84.5501C600 65.6889 660 74.7943 720 89.1028C780 102.761 840 121.622 900 121.622C960 121.622 1020 102.761 1080 117.069C1140 131.378 1200 178.206 1260 206.172C1320 234.139 1380 243.244 1410 248.447L1440 253V0H1410C1380 0 1320 0 1260 0C1200 0 1140 0 1080 0C1020 0 960 0 900 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0H0V253Z" fill="url(#paint1_linear_0_1)"/>
                <defs>
                    <linearGradient id="paint0_linear_0_1" x1="720" y1="395.252" x2="720" y2="-65.9419" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1400FF"/>
                        <stop offset="1" stopColor="#FF00D6" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="720" y1="275.957" x2="720" y2="-294.698" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2400FF" stopOpacity="0"/>
                        <stop offset="1" stopColor="#EB00FF"/>
                    </linearGradient>
                </defs>
            </svg>

            <div className="header-text user">
                <div
                    className="menu-container"
                    onClick={handleClick(toggleMenu)}
                    onMouseEnter={handleHover(setIsMenuHovered)}
                    onMouseLeave={handleLeave(setIsMenuHovered)}
                >
                    <MenuSVG hovered={isMenuHovered}/>
                </div>

                <div className="title-container text-style">
                    {title}
                </div>

                <div className="search-container text-style">
                    {homeIcon ? (
                        <div
                            onClick={handleClick(() => navigate("/"))}
                            className="home-link"
                            onMouseEnter={handleHover(setIsHomeHovered)}
                            onMouseLeave={handleLeave(setIsHomeHovered)}
                        >
                            <HomeSVG hovered={isHomeHovered} />
                        </div>
                    ) : (
                        <>
                            <div
                                className="magnifier-link"
                                onClick={handleClick(() => console.log('SEARCH clicked'))}
                                onMouseEnter={handleHover(setIsSearchHovered)}
                                onMouseLeave={handleLeave(setIsSearchHovered)}
                            >
                                <MagnifierSVG hovered={isSearchHovered} />
                            </div>

                            <div
                                className={`clickable-area ${isSearchHovered ? 'search-hovered' : ''}`}
                                onClick={handleClick(() => console.log('SEARCH clicked'))}
                                onMouseEnter={handleHover(setIsSearchHovered)}
                                onMouseLeave={handleLeave(setIsSearchHovered)}
                            >
                                OTSI
                            </div>

                            <span>|</span>

                            <div
                                className="clickable-area"
                                onClick={handleClick(() => console.log('EST clicked'))}>
                                EST
                            </div>

                            <div
                                className="clickable-area"
                                onClick={handleClick(() => console.log('ENG clicked'))}>
                                ENG
                            </div>
                        </>
                    )}
                </div>
            </div>

            <UserSideMenu isOpen={isMenuOpen} onClose={toggleMenu} userName={username}/>
        </header>
    );
};

export default UserHeader;