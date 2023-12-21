import React, { useState, useEffect } from 'react';

const DayDropdown = ({ selectedWeek, onSelectDay }) => {
    const [selectedDay, setSelectedDay] = useState('');

    const parseCustomDate = (dateString) => {
        // Assuming the date format is 'd. mmm yy' (e.g., '24. dets 23')
        const parts = dateString.split(' ');
        const day = parseInt(parts[0], 10);
        const month = parseMonth(parts[1]);
        const year = parseInt(parts[2], 10) + 2000; // Adjust the year as needed

        return new Date(year, month, day);
    };

    const parseMonth = (monthString) => {
        // Map month abbreviations to month numbers
        const monthMap = {
            'jaan': 0, 'veebr': 1, 'märts': 2, 'apr': 3, 'mai': 4, 'juuni': 5,
            'juuli': 6, 'aug': 7, 'sept': 8, 'okt': 9, 'nov': 10, 'dets': 11,
        };

        return monthMap[monthString];
    };

    const generateDays = () => {
        if (!selectedWeek) {
            return [];
        }

        const days = [];
        const startDate = parseCustomDate(selectedWeek.start);
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            days.push({
                value: currentDate.getDate(),
                label: currentDate.toLocaleDateString('et-EE', { day: 'numeric', month: 'short' }),
            });
        }

        return days;
    };

    useEffect(() => {
        const days = generateDays();
        setSelectedDay(days.length > 0 ? days[0].value : '');
    }, [selectedWeek]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
        onSelectDay && onSelectDay(event.target.value);
    };

    return (
        <select value={selectedDay} onChange={handleDayChange}>
            {generateDays().map((day) => (
                <option key={day.value} value={day.value}>
                    {day.label}
                </option>
            ))}
        </select>
    );
};

export default DayDropdown;