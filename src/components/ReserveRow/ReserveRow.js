import React, {useState} from 'react';
import './ReserveRow.css';

const UserDetails = () => {
    const buttonTexts = [0, 1, 2, 3, 4, 5];
    const [clickedButtons, setClickedButtons] = useState([]);

    const handleButtonClick = (index) => {
        setClickedButtons((prevClickedButtons) => {
            if (prevClickedButtons.includes(index)) {
                // If already clicked, remove from the array to toggle back
                return prevClickedButtons.filter((clickedIndex) => clickedIndex !== index);
            } else {
                // If not clicked, add to the array to toggle on
                return [...prevClickedButtons, index];
            }
        });
    };

    return (
        <div className="box">
            {buttonTexts.map((text, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => handleButtonClick(index)}
                    className={clickedButtons.includes(index) ? 'clicked' : ''}
                >
                    {text}
                </button>
            ))}
        </div>
    );
};
export default UserDetails