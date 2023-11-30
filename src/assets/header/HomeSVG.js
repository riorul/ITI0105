import React from 'react';

const HomeSVG = ({ hovered }) => (
    <svg
        width="55" height="55"
        viewBox="0 0 55 55"
        fill="none"
        className={`home-svg${hovered ? ' home-hovered' : ''}`}
    >
        <path
            className="home-roof"
            d="M11.4585 29.2409C11.4585 26.1293 11.4585 24.5736 12.0875 23.2061C12.7164 21.8385 13.8977 20.8261 16.2601 18.8011L18.5518 16.8368C22.8219 13.1767 24.9569 11.3467 27.5002 11.3467C30.0434 11.3467 32.1784 13.1767 36.4485 16.8368L38.7402 18.8011C41.1027 20.8261 42.2839 21.8385 42.9129 23.2061C43.5418 24.5736 43.5418 26.1293 43.5418 29.2409V38.9584C43.5418 43.2796 43.5418 45.4402 42.1994 46.7827C40.857 48.1251 38.6964 48.1251 34.3752 48.1251H20.6252C16.304 48.1251 14.1434 48.1251 12.8009 46.7827C11.4585 45.4402 11.4585 43.2796 11.4585 38.9584V29.2409Z"
            stroke="white"
        />
        <path
            className="home-base"
            d="M33.2293 48.125V35.375C33.2293 34.8227 32.7816 34.375 32.2293 34.375H22.771C22.2187 34.375 21.771 34.8227 21.771 35.375V48.125"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default HomeSVG;