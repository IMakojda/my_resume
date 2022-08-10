import React from 'react';
import './contacts.css';
import { BsTelephoneOutbound,BsLinkedin,BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5>Let`s Talk</h5>
      <h2>Contact Me</h2>
      <div className="container contacts__container">
        <div className="contact-options">

            <article >
              <a href="tel:+380508195763" className="contact-item">
                <BsTelephoneOutbound size="30px"/>
                +380508195763
              </a>
            </article>

          <article >
            <a href="mailto:imakojda@gmail.com" className="contact-item">
              <FiMail size="30px"/>
              imakojda@gmail.com
            </a>
          </article>

          <article>
            <a href="https://www.linkedin.com/in/igor-makoida-885939235" className="contact-item">
              <BsLinkedin size="30px"/>
              Linkedin
            </a>
          </article>

          <article >
            <a href="https://github.com/IMakojda" className="contact-item">
              <BsGithub size="30px"/>
              GitHub
            </a>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
