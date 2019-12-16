import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Facebook = () => {
    
return (
    <a rel="noopener" aria-label="Open Facebook profile." href="https://www.facebook.com/shaun.guimond" target="_blank"><FontAwesomeIcon icon={ faFacebookSquare } className="fa-2x" /></a>
)
};

const Instagram = () => {
    
    return (
        <a rel="noopener" aria-label="Open Instagram profile." href="https://www.instagram.com/shagui88/" target="_blank"><FontAwesomeIcon icon={ faInstagram } className="fa-2x" /></a>
    )
};

const LinkedIn = () => {
    
    return (
        <a rel="noopener" aria-label="Open LinkedIn profile." href="https://www.linkedin.com/in/shaun-guimond/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-2x" /></a>
    )
};

const Twitter = () => {
    
    return (
        <a rel="noopener" aria-label="Open Twitter profile." href="https://twitter.com/Shagui88" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="fa-2x" /></a>
    )
};

export { Facebook, Instagram, LinkedIn, Twitter };


