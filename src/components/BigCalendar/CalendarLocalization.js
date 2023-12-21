import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/et'; // Import Estonian locale for moment.js

moment.locale('et'); // Set the locale for moment.js

// Define custom messages for the Estonian locale
export const customMessages = {
    allDay: 'Kogu päev',
    previous: 'Eelnev',
    next: 'Järgnev',
    today: 'Täna',
    month: 'Kuu',
    week: 'Nädal',
    day: 'Päev',
    agenda: 'Päevakord',
    date: 'Kuupäev',
    time: 'Aeg',
    event: 'Sündmus',
    showMore: total => `+ ${total} rohkem`,
};

// Define a custom moment locale directly
const customLocale = {
    formats: {
        dateFormat: 'YYYY-MM-DD', // Customize the date format as needed
    },
    firstDayOfWeek: 1, // Set the first day of the week (0 for Sunday, 1 for Monday, etc.)
    ...customMessages,
};

// Create a localizer with the custom moment locale
export const localizer = momentLocalizer(moment, customLocale);

export default localizer;
