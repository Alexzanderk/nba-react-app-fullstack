import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <Link to="/" className="logo">
            <img src="/images/nba_logo.png" alt="nba_Logo" />
        </Link>
        <div className='right'>
            @NBA 2018 All right reserved
        </div>
    </footer>
);

export default Footer;
