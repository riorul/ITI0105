import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <h5>Fox Serve broneeringud</h5>
            </div>
            <div className="column">
                <a href="#">Firma</a>
                <a href="#">Meist</a>
                <a href="#">Blogi</a>
                <a href="#">Kontakt</a>
            </div>
            <div className="column">
                <a href="#">Mängija</a>
                <a href="#">Laenuta</a>
                <a href="#">FAQ</a>
                <a href="#">Broneeri</a>
            </div>
            <div className="column">
                <a href="#">Meedia</a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Taltech</a>
            </div>
            <div className="line2"></div>
            <p className="names">Rivo Orulepa, Tormi Tulvik, Sander Valdmaa</p>
        </footer>
    );
};

export default Footer;