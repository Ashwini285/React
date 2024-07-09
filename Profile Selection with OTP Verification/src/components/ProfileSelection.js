import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import shipperIcon from '../assets/shipper-icon.png';
import transporterIcon from '../assets/transporter-icon.png';

const ProfileSelection = () => {
    return (
        <div className="container">
            <h1>Please select your profile</h1>
            <form>
                <div className="profile-option">
                    <input type="radio" id="shipper" name="profile" value="shipper" />
                    <label htmlFor="shipper">
                        <img src={shipperIcon} alt="Shipper Icon" className="icon" />
                        <div>
                            <h2>Shipper</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </label>
                </div>
                <div className="profile-option">
                    <input type="radio" id="transporter" name="profile" value="transporter" />
                    <label htmlFor="transporter">
                        <img src={transporterIcon} alt="Transporter Icon" className="icon" />
                        <div>
                            <h2>Transporter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </label>
                </div>
                <Link to="/language" className="button">CONTINUE</Link>
            </form>
        </div>
    );
};

export default ProfileSelection;
