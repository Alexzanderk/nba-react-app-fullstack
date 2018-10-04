import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/SideNav';


const Header = props => {
    const logo = () => (
        <Link className="logo" to="/">
            <img src="/images/nba_logo.png" alt="NBALogo" />
        </Link>
    );

    const navBars = () => {
        return (
            <div className="bars">
                <FontAwesome 
                    onClick={props.onOpenNav}
                    name="bars" 
                />
            </div>
        );
    };

    return (
        <header className="header">
            <SideNav {...props} />
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    );
};

export default Header;
