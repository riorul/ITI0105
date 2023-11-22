import React from 'react';
import FooterLink from './FooterLink'; // Make sure to adjust the import path
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <h5 className="footer-header">Fox Serve broneeringud</h5>
            </div>
            <div className="column">
                <FooterLink to="/firma">Firma</FooterLink>
                <FooterLink to="/meist">Meist</FooterLink>
                <FooterLink to="/blogi">Blogi</FooterLink>
                <FooterLink to="/kontakt">Kontakt</FooterLink>
            </div>
            <div className="column">
                <FooterLink to="/mangija">Mängija</FooterLink>
                <FooterLink to="/laenuta">Laenuta</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
                <FooterLink to="/broneeri">Broneeri</FooterLink>
            </div>
            <div className="column">
                <FooterLink to="/meedia">Meedia</FooterLink>
                <FooterLink to="https://www.instagram.com/" external>
                    Instagram
                </FooterLink>
                <FooterLink to="https://www.facebook.com/" external>
                    Facebook
                </FooterLink>
                <FooterLink to="https://www.taltech.ee/" external>
                    Taltech
                </FooterLink>
            </div>
            <div className="footer-line"></div>
            <p className="names">Rivo Orulepa, Tormi Tulvik, Sander Valdmaa</p>
        </footer>
    );
};

export default Footer;