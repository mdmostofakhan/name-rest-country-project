import React from 'react';
import { Link } from 'react-router-dom';
import './Heade.css';
import ActiveLink from '../activeLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to='/post'>Post</ActiveLink>
            <ActiveLink to='/countact'>Countact</ActiveLink>
            <ActiveLink to='/addrees'>Address</ActiveLink>
        </nav>
    );
};

export default Header;