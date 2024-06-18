import { faCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = 'mahaveer30032005@gmail.com';
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.description)}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <div className='contact-me'>
      <div className="title">
        <span className="green"><FontAwesomeIcon icon={faCircle} /></span>Have any Idea to collaborate with me ?
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="part">
            <label htmlFor="subject">Project Title: </label>
            <input
              type="text"
              id='subject'
              placeholder='Eg: E-Commerce Website'
              value={formData.subject}
              onChange={handleChange}
              name='subject'
              className='contact-input'
            />
          </div>
          <div className="part">
            <label htmlFor="description">Project Description: </label>
            <textarea
              id='description'
              placeholder='Explain briefly'
              value={formData.description}
              onChange={handleChange}
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
