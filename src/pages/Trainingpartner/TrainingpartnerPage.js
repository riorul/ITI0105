import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import InputField from '../../components/InputField/InputField';
import ReturnHomeButton from '../../components/buttons/ReturnHomeButton';
import StarRating from '../../components/StarRating/StarRating';
import './TrainingpartnerPage.css';

const NameIconSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="10" r="4" fill="#C289FC" />
        <ellipse cx="13" cy="19.5" rx="8" ry="4.5" fill="#C289FC" />
        <circle cx="13" cy="13" r="12.5" stroke="#C289FC" />
    </svg>
);

const EmailIconSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12.5" stroke="#C289FC"/>
        <rect x="6.25" y="8.25" width="13.5" height="9.5" rx="0.75" fill="#C289FC" stroke="#C289FC" strokeWidth="0.5"/>
        <path d="M12.851 13.2007C12.9395 13.2664 13.0605 13.2664 13.149 13.2007L19.2112 8.70074C19.2978 8.63647 19.3334 8.52392 19.2995 8.42153C19.2657 8.31915 19.17 8.25 19.0622 8.25L6.93782 8.25C6.82999 8.25 6.7343 8.31914 6.70046 8.42153C6.66661 8.52391 6.70223 8.63646 6.78881 8.70074L12.851 13.2007Z" fill="#C289FC" stroke="#9747FF" strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
);

const TrainingpartnerPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(0); // State to hold the selected rating
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, comments);
        // Logic for handling form submission goes here
        setIsFormSubmitted(true);
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <div className="page-container">
            <Header title="Treeningpaarilise otsing" homeIcon={true} />
            <div className="container">
                <div className="left-training-section">
                    <div className="form-section">
                        {!isFormSubmitted && (
                            <form onSubmit={handleSubmit}>
                                <div className="name-input">
                                    <InputField
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Nimi"
                                        label="Nimi:"
                                        icon={<NameIconSVG />}
                                    />
                                </div>
                                <div className="email-input">
                                    <InputField
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="nimi123@mail.ee"
                                        label="Emaili aadress:"
                                        icon={<EmailIconSVG />}
                                    />
                                </div>
                                <div className="star-rating-section">
                                    <label>Sinu tenniseoskuste tase:</label>
                                    <StarRating rating={rating} onStarClick={handleStarClick} />
                                </div>
                                <div className="comments-input">
                                    <label>Kommentaarid:</label>
                                    <textarea
                                        rows="4"
                                        value={comments}
                                        onChange={(e) => setComments(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="training-submit">
                                    <input type="submit" value="Saada" />
                                </div>
                            </form>
                        )}
                        {isFormSubmitted && (
                            <div className="training-form-submitted">
                                <p className="training-form-submitted-text">Teade saadetud!</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="right-training-section">
                    {!isFormSubmitted && (
                        <div className="text-feedback">
                            Siia võid jätta sõnumi kui soovid treeninpartnerit leida ja võtame sinuga ühendust!
                        </div>
                    )}
                    {isFormSubmitted && (
                        <div className="return-home-button-wrapper">
                            <ReturnHomeButton text="Tagasi avalehele!" className="training-return-home-button"/>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TrainingpartnerPage;