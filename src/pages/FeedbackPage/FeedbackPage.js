import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import InputField from '../../components/InputField/InputField';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(3);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, phone, feedback);
        setFeedbackSent(true);
    };

    const handleReturnToMain = () => {
        // Redirect to main page logic goes here
        // For example, using react-router-dom: history.push('/main');
    };

    return (
        <div className="page-container">
            <Header title="Tagasiside vorm" homeIcon={true}/>
            <div className="container">
                <div className="left-feedback-section">
                    <div className="ellipse-131"></div>
                    <div className="image-15"></div>
                    <div className="text-feedback">
                        Jäta tagasiside siia!
                    </div>
                </div>
                <div className="right-feedback-section">
                    <div className="feedback">
                        <div className="content">
                            {feedbackSent ? (
                                <div>
                                    <p className="feedback-sent-message">Feedback Sent!</p>
                                    <button className="return-button" onClick={handleReturnToMain}>
                                        Return to main page
                                    </button>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="name_input">
                                    <InputField
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Nimi"
                                        label="Nimi:"
                                    />
                                    <InputField
                                        type="tel"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        placeholder="+372 1234 5678"
                                        label="Telefoninumber:"
                                    />
                                </div>
                                <div className="email_input">
                                    <InputField
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="nimi123@mail.ee"
                                        label="Meiliaadress:"
                                    />
                                </div>
                                <div className="emojis_layout">
                                    <label>Kui rahul olete meie teenusega?</label>
                                    <div className="emojis">
                                        <div className="emoji">
                                            <p>{rating >= 1 ? '😠' : '☁️'}</p>
                                        </div>
                                        <div className="emoji">
                                            <p>{rating >= 2 ? '😢' : '☁️'}</p>
                                        </div>
                                        <div className="emoji">
                                            <p>{rating >= 3 ? '😐' : '☁️'}</p>
                                        </div>
                                        <div className="emoji">
                                            <p>{rating >= 4 ? '😊' : '☁️'}</p>
                                        </div>
                                        <div className="emoji">
                                            <p>{rating >= 5 ? '😄' : '☁️'}</p>
                                        </div>
                                    </div>
                                    <input
                                        onChange={handleRatingChange}
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={rating}
                                        className="rating-scale"
                                    />
                                </div>
                                <div className="feedback_input">
                                    <label>Tagasiside:</label>
                                    <textarea rows="4" value={feedback} onChange={e => setFeedback(e.target.value)} />
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Saada" />
                                </div>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FeedbackPage;