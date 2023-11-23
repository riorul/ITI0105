import React from 'react';

const MenuSVG = ({ hovered }) => (
    <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        className={`menu-svg${hovered ? ' menu-hovered' : ''}`}
    >
        <path
            className="line-menu-one"
            d="M11.4732 16.0415H43.5788"
            stroke="white"
            strokeLinecap="round"
        />
        <path
            className="line-menu-two"
            d="M11.4732 27.5H34.4058"
            fill="transparent"
            stroke="white"
            strokeLinecap="round"
        />
        <path
            className="line-menu-three"
            d="M11.4732 38.9585H25.2328"
            stroke="white"
            strokeLinecap="round"
        />
    </svg>
);

export default MenuSVG;