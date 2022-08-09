import React from 'react';
import { BsLinkedin,BsGithub } from "react-icons/bs";

const HeaderContactLink = () => {
  return (
    <div className="socials-link">
      <a href="https://www.linkedin.com/in/igor-makoida-885939235/"><BsLinkedin size="25px"/></a>
      <a href="https://github.com/IMakojda"><BsGithub size="25px"/></a>
    </div>
  );
};

export default HeaderContactLink;
