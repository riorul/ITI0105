import React from 'react';

const MagnifierSVG = ({ hovered }) => (
    <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        className={`magnifier-svg${hovered ? ' search-hovered' : ''}`}
    >
        <ellipse
            cx="25.2083"
            cy="25.2082"
            rx="16.0417"
            ry="16.0417"
            className="magnifier-circle"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
        />
        <path
            d="M45.8334 45.8335L38.9584 38.9585"
            className="magnifier-line"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);
export default MagnifierSVG;