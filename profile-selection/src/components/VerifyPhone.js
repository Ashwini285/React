import React from 'react';
import '../styles.css';

const VerifyPhone = () => {
    return (
        <div className="container">
            <h1>Verify Phone</h1>
            <p>Code is sent to 8094508485</p>
            <div className="otp-inputs">
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
            </div>
            <p>Didn't receive the code? <a href="#">Request Again</a></p>
            <a href="#" className="button">VERIFY AND CONTINUE</a>
        </div>
    );
};

export default VerifyPhone;
