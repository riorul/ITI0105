import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ rating, onStarClick }) => {
    const [hoveredRating, setHoveredRating] = useState(null);

    const handleStarClick = (selectedRating) => {
        onStarClick(selectedRating);
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        className={`star ${starValue <= (hoveredRating || rating) ? 'active' : ''}`}
                        onClick={() => handleStarClick(starValue)}
                        onMouseEnter={() => setHoveredRating(starValue)}
                        onMouseLeave={() => setHoveredRating(null)}
                    >
            &#9733;
          </span>
                );
            })}
        </div>
    );
};

export default StarRating;
