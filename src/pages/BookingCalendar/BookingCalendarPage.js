import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/UserHeader';
import Footer from '../../components/Footer/Footer';
import BigCalendarComponent from '../../components/BigCalendar/BigCalendarComponent';
import './BookingCalendarPage.css';
import RoundedButton from "../../components/Buttons/RoundedButton";

const BookingCalendarPage = () => {
    const [selectedCourts, setSelectedCourts] = useState([]); // Using an array to store selected courts
    const [leftSectionHeight, setLeftSectionHeight] = useState('50vh'); // Default height for the left section

    const handleCourtSelect = (court) => {
        const isSelected = selectedCourts.includes(court);

        if (isSelected) {
            const updatedSelection = selectedCourts.filter((selected) => selected !== court);
            setSelectedCourts(updatedSelection);
        } else {
            setSelectedCourts([...selectedCourts, court]);
        }
    };

    // ... (other existing logic)

    const cities = ["Tallinn", "Tartu", "Pärnu", "Narva", "Haapsalu"];
    const courtTypes = ["Sisene", "Väline"];

    const handleCityClick = (city) => {
        handleCourtSelect(city);
    };

    const handleCourtTypeClick = (type) => {
        handleCourtSelect(type);
    };

    useEffect(() => {
        const setCalendarHeight = () => {
            const leftSection = document.querySelector('.left-section');
            if (leftSection) {
                const height = window.getComputedStyle(leftSection).height;
                setLeftSectionHeight(height);
            }
        };

        setCalendarHeight();
        window.addEventListener('resize', setCalendarHeight);
        return () => {
            window.removeEventListener('resize', setCalendarHeight);
        };
    }, []);

    return (
        <div className="booking-calendar-page">
            <Header title="Kalender" homeIcon={true} />
            <div className="main-content">
                {/* Left section with buttons */}
                <div className="left-section">
                    <h4 className="court-subtitles">Top tennisväljakute asukohad</h4>
                    <div className="courts-button-container">
                        {cities.map(city => (
                            <RoundedButton
                                key={city}
                                text={city}
                                onClick={() => handleCityClick(city)}
                                selected={selectedCourts.includes(city)}
                            />
                        ))}
                    </div>

                    <h4 className="court-subtitles">Tenniseväljakute tüübid</h4>
                    <div className="courts-button-container">
                        {courtTypes.map((type) => (
                            <RoundedButton
                                key={type}
                                text={type}
                                onClick={() => handleCourtTypeClick(type)}
                                selected={selectedCourts.includes(type)}
                            />
                        ))}
                    </div>
                </div>
                {/* Right section with BigCalendar */}
                <div className="right-section">
                    <BigCalendarComponent selectedCourt={selectedCourts} calendarHeight={leftSectionHeight} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingCalendarPage;
