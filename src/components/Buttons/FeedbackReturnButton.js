import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeedbackReturnButton.css';

const FeedbackReturnButton = ({ text }) => {
    const navigate = useNavigate();

    const handleReturnToMain = () => {
        navigate('/');
        // Redirect to main page logic goes here
        // For example, using react-router-dom: history.push('/main');
    };

    return (
        <div className="feedback-return-button">
            {/* Custom button */}
            <button className="custom-button" onClick={handleReturnToMain}>
                {text}
            </button>
        </div>
    );
};

export default FeedbackReturnButton;
