import React from 'react';
import { Link } from "react-router-dom";
import { Avatar } from '@material-ui/core';
import { ExpandMore, Language, Search } from '@material-ui/icons';
import logo from '../assets/logo.jpg';
import '../styles/Header.css';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src={logo}
                    alt="airbnblogo"
                />
            </Link>

            <div className="header__center">
                <input type="text" placeholder="Start your search" />
                <Search />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
