import React from 'react';
import './ConfirmationBox.css';

const ConfirmationBox = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-overlay">
            <div className="confirmation-box">
                <div className="confirmation-top">
                    <p>{message}</p>
                </div>
                <div className="confirmation-bottom">
                    <button className="cancel-button" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="delete-button" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationBox;