import React from 'react';

const SocialLink = ({ icon, text, link }) => {
  return (
    <a href={link} className="social-link" target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={text} className="social-icon" />
      <span>{text}</span>
    </a>
  );
};

export default SocialLink;
