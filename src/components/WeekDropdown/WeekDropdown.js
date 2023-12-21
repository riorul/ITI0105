// WeekDropdown.js
import React, { useState, useEffect } from 'react';

const WeekDropdown = ({ onSelectWeek }) => {
    const [dateRanges, setDateRanges] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState(0);

    useEffect(() => {
        const generateDateRanges = () => {
            const today = new Date();
            const startOfWeek = today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1);
            const currentDate = new Date(today.setDate(startOfWeek));

            const dateRangeOptions = Array.from({ length: 5 }, (_) => {
                const startDate = new Date(currentDate);
                const endDate = new Date(currentDate.setDate(currentDate.getDate() + 6));

                return {
                    start: formatCustomDate(startDate),
                    end: formatCustomDate(endDate),
                };
            });

            setDateRanges(dateRangeOptions);
        };

        const formatCustomDate = (date) => {
            const options = { day: 'numeric', month: 'short', year: '2-digit' };
            return new Intl.DateTimeFormat('et-EE', options).format(date);
        };

        generateDateRanges();
    }, []);

    const handleWeekChange = (event) => {
        setSelectedWeek(event.target.value);
        onSelectWeek && onSelectWeek(dateRanges[event.target.value]);
    };

    return (
        <select value={selectedWeek} onChange={handleWeekChange}>
            {dateRanges.map((range, index) => (
                <option key={index} value={index}>
                    {`${range.start} - ${range.end}`}
                </option>
            ))}
        </select>
    );
};

export default WeekDropdown;