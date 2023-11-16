import React from 'react';

const MagnifierSVG = ({ hovered }) => (
    <svg
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
        className={`magnifier-svg${hovered ? ' search-hovered' : ''}`}
    >
        <ellipse
            cx="25.2083"
            cy="25.2082"
            rx="16.0417"
            ry="16.0417"
            className="magnifier-circle"
            stroke="white"  // Set the stroke color to white
            strokeWidth="2"  // Set the stroke width
            fill="transparent"  // Make the circle transparent, i.e., hollow
        />
        <path
            d="M45.8334 45.8335L38.9584 38.9585"
            className="magnifier-line"
            stroke="white"  // Set the stroke color to white
            strokeWidth="2"  // Set the stroke width
            strokeLinecap="round"
        />
    </svg>
);
export default MagnifierSVG;