import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, external, children }) => {
    // Use Link for internal links and anchor tag for external links
    if (external) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <Link to={to}>{children}</Link>
    );
};

export default FooterLink;