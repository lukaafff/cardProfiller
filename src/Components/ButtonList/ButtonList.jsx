import React from 'react';
import SocialLink from '../SocialLink/SocialLink';

const ButtonList = ({ links }) => {
  return (
    <div className="button-list">
      {links.map((link, index) => (
        <SocialLink key={index} icon={link.icon} text={link.text} link={link.url} />
      ))}
    </div>
  );
};

export default ButtonList;
