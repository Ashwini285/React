import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Footer';
import icon from './icon.jpg'; 
import Card from './Card';

const App = () => {
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState('English');
    const [otp, setOtp] = useState('');
    const [profile, setProfile] = useState('');

    const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleProfileChange = (e) => {
        setProfile(e.target.value);
    };

    const verifyOtp = () => {
        // Simulate OTP verification
        if (otp === '123456') {
            setPage(4);
        } else {
            alert('Invalid OTP');
        }
    };

    const Header = () => (
        <div className="header">
            <div className="header-left">
                <span>9:41</span>
            </div>
            <div className="header-right">
                <i className="fas fa-signal"></i>
                <i className="fas fa-wifi"></i>
                <i className="fas fa-battery-full"></i>
            </div>
        </div>
    );

    return (
        <div className="App">
            {page === 1 && (
                <div className="form-container">
                    <Header />
                    <div className="language-selection">
                        <img src={icon} alt="Icon" className="icon" /> 
                        <h2>Please select your Language</h2>
                        <p>You can change the language at any time</p>
                        <select value={language} onChange={handleLanguageChange}>
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="button-container">
                        <button onClick={() => setPage(2)}>Next</button>
                    </div>
                    <Footer />
                </div>
            )}
            {page === 2 && (
                <div className="form-container">
                    <Header />
                    <div className="phone-verification">
                        <h2>Verify Phone</h2>
                        <p>Code is sent to 8094508485</p>
                        <input
                            type="text"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength="6"
                            placeholder="Enter OTP"
                        />
                        <button onClick={verifyOtp}>Verify and Continue</button>
                    </div>
                    <Footer />
                </div>
            )}
            {page === 4 && (
                <div className="form-container">
                    <Header />
                    <div className="profile-selection">
                        <h2>Please select your profile</h2>
                        <div className="card-container">
                            <Card 
                                icon={<i className="fas fa-warehouse"></i>} 
                                title="Shipper" 
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing" 
                                handleClick={() => setProfile('Shipper')}
                            />
                            <Card 
                                icon={<i className="fas fa-truck"></i>} 
                                title="Transporter" 
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing" 
                                handleClick={() => setProfile('Transporter')}
                            />
                        </div>
                        <button onClick={() => alert(`Selected profile: ${profile}`)}>Continue</button>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default App;
