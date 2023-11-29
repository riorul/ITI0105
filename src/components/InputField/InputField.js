import React from 'react';
import './InputField.css';
const InputField = ({ type, value, onChange, placeholder, label }) => {
    return (
       <div className="input-div">
           <label>
               {label}

           </label>
            <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
       />
       </div>
    );
};

export default InputField;