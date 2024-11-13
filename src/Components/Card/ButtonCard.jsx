
import React from 'react';
//import './Card.scss'; // Import the SCSS file for styling if needed

const Card = ({ cardData }) => {
    const { text, buttonText, buttonLink } = cardData;

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text" style={{lineHeight:"40px"}}>{text}</p>
                <a href={buttonLink} className="card-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default Card;