import React from 'react';
import './RoundeButton.css'; // Import the CSS file

const RoundedButton = ({ onClick, text, type="primary", selected = false }) => {
    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={`rounded-button ${type} ${selected ? 'selected' : ''}`} onClick={handleButtonClick} type="submit">
            {text}
        </button>
    );
};

export default RoundedButton;