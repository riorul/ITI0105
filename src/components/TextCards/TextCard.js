import React from 'react';
import './TextCard.css';

const TextCard = ({ title, text }) => (
    <div className="text-card">
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
);

export default TextCard;