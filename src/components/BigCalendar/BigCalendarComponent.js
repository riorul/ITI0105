import React, { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import localizer from './CalendarLocalization'; // Ensure the correct path

const customToolbarMessages = {
    today: 'Täna',
    previous: 'Eelmine',
    next: 'Järgmine',
    month: 'Kuu',
    week: 'Nädal',
    day: 'Päev',
    agenda: 'Päevakord',
};

const BigCalendarComponent = ({ selectedCourt }) => {
    const [events, setEvents] = useState([
        // Initial events data
        {
            title: 'Broneeritud',
            start: new Date('2023-12-15T10:00:00'),
            end: new Date('2023-12-15T12:00:00'),
            color: '#B232A6', // Example: Custom property for specifying event color
        },
        // Add more events as needed
    ]);

    // Function to style events based on their properties
    const eventStyleGetter = (event) => {
        const style = {
            backgroundColor: event.color || '#ED82FF', // Set default color if not specified
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: 'none',
            display: 'block',
        };
        return {
            style,
        };
    };

    return (
        <div style={{ height: 700, width: '95%' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={customToolbarMessages} // Use customToolbarMessages for the toolbar buttons
                components={{
                    toolbar: CustomToolbar, // Custom toolbar component
                }}
                eventPropGetter={eventStyleGetter} // Apply styles to events
            />
        </div>
    );
};

// Custom toolbar component with buttons
const CustomToolbar = ({ label, onView, onNavigate }) => (
    <div className="custom-toolbar">
        {/* Grouping the first 3 buttons */}
        <div className="first-three-buttons">
            <button type="button" onClick={() => onNavigate('TODAY')}>
                Today
            </button>
            <button type="button" onClick={() => onNavigate('PREV')}>
                Previous
            </button>
            <button type="button" onClick={() => onNavigate('NEXT')}>
                Next
            </button>
        </div>
        {/* Month/year label */}
        <div className="month-year-label">
            <div className="rbc-toolbar-label">{label}</div>
        </div>
        {/* Grouping the last 4 buttons */}
        <div className="last-four-buttons">
            <button type="button" onClick={() => onView('month')}>
                Month
            </button>
            <button type="button" onClick={() => onView('week')}>
                Week
            </button>
            <button type="button" onClick={() => onView('day')}>
                Day
            </button>
            <button type="button" onClick={() => onView('agenda')}>
                Agenda
            </button>
        </div>
    </div>
);

export default BigCalendarComponent;
