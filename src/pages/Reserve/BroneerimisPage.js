import React, {useState} from 'react';
import "./BroneerimisPage.css"
import "../Login/Login.css"
import Header from '../../components/Header/UserHeader';
import Footer from '../../components/Footer/Footer'
import WeekDropdown from "../../components/WeekDropdown/WeekDropdown";
import DayDropdown from "../../components/WeekDropdown/DayDropdown";

const BroneerimisPage = () => {
    const [selectedWeek, setSelectedWeek] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const hours = Array.from({ length: 12 }, (_, index) => index + 7);

    const stations = ['Station 1', 'Station 2'];

    const [selectedStations, setSelectedStations] = useState({});
    const handleStationClick = (time, station) => {
        setSelectedStations((prevSelectedStations) => {
            const updatedStations = { ...prevSelectedStations };
            if (updatedStations[time] === station) {
                delete updatedStations[time];
            } else {
                updatedStations[time] = station;
            }
            return updatedStations;
        });
    };

    const handleWeekSelect = (week) => {
        setSelectedWeek(week);
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day);
    };

    const handleSubmitReservation = ()  =>  {
        alert("Broneeritud!");
    }


    return (
        <div>
            <Header title="Broneeri" homeIcon={true}/>
            <div className="reservation-page">
                <div className="reservation-left-side">
                    <div className="reservation-city-container">
                        <h1 className="reservation-title">HALDAJAD</h1>
                        <button className="reservation-city-type">Tallinn</button>
                        <button className="reservation-city-type">Pärnu</button>
                        <button className="reservation-city-type">Narva</button>
                        <button className="reservation-city-type">Haapsalu</button>
                        <button className="reservation-city-type">Tartu</button>
                    </div>
                </div>

                <div className="reservation-right-side">
                    <div className="reservation-time-place">
                        <select>
                            <option value="parnu-kesklinn">Pärnu Kesklinn</option>
                            <option value="parnu-telliskivi">Pärnu Telliskivi</option>
                        </select>
                        <WeekDropdown onSelectWeek={handleWeekSelect} />
                        {selectedWeek && (
                            <div>
                                <DayDropdown selectedWeek={selectedWeek} onSelectDay={handleDaySelect} />
                            </div>
                        )}
                    </div>

                    <h1 className="reservation-title">Ajatabel</h1>
                    <div className="reservation-row-component outside">
                        <h1 className="reservation-title">Kell</h1>
                        <h1 className="reservation-title">Staadion I</h1>
                        <h1 className="reservation-title">Staadion II</h1>
                    </div>
                    <div className="time-table-container">
                        {hours.map((hour) => (
                            <div className="reservation-row-component">
                                <h1 className="reservation-title">{`${hour}:00`}</h1>
                                {stations.map((station) => (
                                    <button
                                        key={`${station}_${hour}`}
                                        onClick={() => handleStationClick(hour, station)}
                                        className={`reservation-select ${selectedStations[hour] === station ? 'selected' : ''}`}
                                    >
                                        <h4 className="selection-reserve">
                                            {selectedStations[hour] === station ? '-' : '+'}
                                        </h4>
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="reservation-conf-container">
                <button className="finish-reservation" onClick={() =>handleSubmitReservation}>Kinnita</button>
            </div>
            <Footer footerSvg={true} />
        </div>
    );
};

export default BroneerimisPage;