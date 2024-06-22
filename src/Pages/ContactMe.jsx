import { faCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactMe = () => {

  return (
    <div className='contact-me'>
      <div className="title">
        <span className="green"><FontAwesomeIcon icon={faCircle} /></span>Have any Idea to collaborate with me ?
      </div>
      <div className="contact-form">
        <form className='contact-me-form' method='POST' action='https://formspree.io/f/xnnaapqn'>
          <div className="part">
            <label htmlFor="subject">Project Title: </label>
            <input
              type="text"
              id='subject'
              placeholder='Eg: E-Commerce Website'
              name='subject'
              className='contact-input'
            />
          </div>
          <div className="part">
            <label htmlFor="description">Project Description: </label>
            <textarea
              id='description'
              placeholder='Explain briefly'
              name='description'
              className='contact-input'
            />
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
