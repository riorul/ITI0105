import React from 'react';
import ImageCard from './ImageCard';
import './ImageGallery.css';
import calculateGradientColor from "../../utils/calculateGradientColor";


const ImageGallery = ({ imageList }) => {
    const startColor = "#FF4EE2";
    const endColor = "#2400FF";

    return (
        <div className="image-gallery">
            {imageList.map((image, index) => (
                <ImageCard key={index}
                           text={image.text}
                           imagePath={image.imagePath}
                           title={image.title}
                           cardColor={calculateGradientColor(index, imageList.length, startColor, endColor)} />
            ))}
        </div>
    );
};

export default ImageGallery;