import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <div className="radio-button">
        <input type="radio" name="option" />
      </div>
      <div className="content">
        <div className="icon">
          {icon}
        </div>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
