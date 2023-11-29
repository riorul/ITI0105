import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CourtsPage.css';

import RoundedButton from "../../components/buttons/RoundedButton";
import TextCard from "../../components/TextCards/TextCard";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
const CourtsPage = () => {
    const cities = ["Tallinn", "Tartu", "Pärnu", "Narva", "Haapsalu"];
    const courtTypes = ["Sisene", "Väline"]

    const [selectedCities, setSelectedCities] = React.useState([]);
    const [selectedCourtTypes, setSelectedCourtTypes] = React.useState([]);
    const fillerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis " +
        "scelerisque sapien. Donec volutpat eros ac sapien venenatis, tristique gravida orci rutrum. " +
        "Aliquam erat volutpat. Suspendisse maximus tempor eleifend. Sed consequat velit in nulla " +
        "consequat, eget placerat ligula dictum. Praesent eget dui vitae massa consequat tempus. " +
        "Aliquam porta ut ante ac luctus."
    const imageList = [
        { city: "Pärnu", title: "Pärnu Kesklinn",  courtType: "Väline", text: fillerText.substring(0, 150), imagePath: 'courts/parnu_center_outside.jpg' },
        { city: "Pärnu", title: "Pärnu Telliskivi", courtType: "Sisene Väline",text: fillerText.substring(0, 150), imagePath: 'courts/parnu_telliskivi.jpg' },
        { city: "Haapsalu", title: "Haapsalu HSB", courtType: "Väline",text: fillerText.substring(0, 150), imagePath: 'courts/haapaslu_HSB_tennisekeskus.jpg' },
        { city: "Tallinn", title: "Tallinn Forus Tondi", courtType: "Sisene Väline",text: fillerText.substring(0, 150), imagePath: 'courts/talinn_forus_spordikeskus_tondi.jpg' },
        { city: "Tartu", title: "Tartu Akadeemiline", courtType: "Väline",text: fillerText.substring(0, 150), imagePath: 'courts/tartu_akadeemiline.jpg' },
        { city: "Tartu", title: "Tartu Veeriku", courtType: "Sisene",text: fillerText.substring(0, 150), imagePath: 'courts/tartu_veeriku_tennisekeskus.jpg' },
        { city: "Tallinn", title: "Tallinn Rocca Al Mare", courtType: "Sisene Väline",text: fillerText.substring(0, 150), imagePath: 'courts/tallinn_rocca_al_mare.jpg' },
        { city: "Narva", title: "Narva Spordikeskus", courtType: "Sisene",text: fillerText.substring(0, 150), imagePath: 'courts/narva_spordikeskus.jpg' },
    ];

    const filterImages = () => {
        return imageList.filter(image => {
            const isSelectedCity = selectedCities.length === 0 || selectedCities.includes(image.city);
            const imageCourtTypes = image.courtType.split(' ');
            const isSelectedCourtType = selectedCourtTypes.length === 0 ||
                selectedCourtTypes.some(selectedType => imageCourtTypes.includes(selectedType));

            return isSelectedCity && isSelectedCourtType;
        });
    };

    const handleCityClick = (city) => {
        setSelectedCities((prevSelectedCities) => {
            if (prevSelectedCities.includes(city)) {
                return prevSelectedCities.filter((selectedCity) => selectedCity !== city);
            } else {
                return [...prevSelectedCities, city];
            }
        });
    };

    const handleCourtTypeClick = (type) => {
        setSelectedCourtTypes((prevSelectedTypes) => {
            if (prevSelectedTypes.includes(type)) {
                return prevSelectedTypes.filter((selectedType) => selectedType !== type);
            } else {
                return [...prevSelectedTypes, type];
            }
        });
    };

    const filteredImages = filterImages();

    return (
        <div>
            <Header title="Staadionid" homeIcon={true}/>

            <h4 className="court-subtitles">Top tennisväljakute asukohad</h4>

            <div className="courts-button-container">
                {cities.map(city => (
                    <RoundedButton
                        key={city}
                        text={city}
                        onClick={() => handleCityClick(city)}
                        selected={selectedCities.includes(city)}
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
                        selected={selectedCourtTypes.includes(type)}
                    />
                ))}
            </div>

            <h4 className="court-subtitles">Erinevate tenniseväljakute valik</h4>

            <div className="image-gallery-container">
                <ImageGallery imageList={filteredImages} />
            </div>

            <h4 className="court-subtitles">Kuidas see töötab?</h4>
            <div className="text-card-container">
                <TextCard text={fillerText} title={"1. Sirvi & broneeri"} />
                <TextCard text={fillerText} title={"2. Lõbutse!"} />
                <TextCard text={fillerText} title={"3. Jäta arvustus"} />
            </div>
            <Footer footerSvg={true}/>
        </div>
    );
};

export default CourtsPage;
