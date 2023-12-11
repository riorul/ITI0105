import React from 'react';
import './InputField.css';

const InputField = ({ type, value, onChange, placeholder, label, customClassName, icon }) => {
    return (
        <div className={`input-field ${customClassName}`}>
            <label>{label}</label>
            <div className="input-wrapper">
                {icon && <span className="input-icon">{icon}</span>} {/* Render icon */}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputField;