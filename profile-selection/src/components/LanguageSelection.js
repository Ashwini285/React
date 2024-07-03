import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import languageIcon from '../assets/language-icon.png';

const LanguageSelection = () => {
    return (
        <div className="container">
            <img src={languageIcon} alt="Language Icon" className="icon-large" />
            <h1>Please select your Language</h1>
            <p>You can change the language at any time.</p>
            <select>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                {/* Add more languages as needed */}
            </select>
            <Link to="/verify-phone" className="button">NEXT</Link>
        </div>
    );
};

export default LanguageSelection;
