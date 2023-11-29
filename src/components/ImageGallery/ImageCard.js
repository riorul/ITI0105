import React from 'react';
import './ImageCard.css';


const ImageCard = ( {text, imagePath="home/introthird.png", cardColor, title } ) => {
    // imagePath is relative to assets folder
    const imageSrc = require(`../../assets/${imagePath}`);
    return (
        <div className="image-card" style={{ backgroundColor: cardColor }}>
            <img src={imageSrc} alt="Card Image" />
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    );
};

export default ImageCard;