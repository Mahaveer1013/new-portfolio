import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import Profile from '../images/my_image1.png';
import { Link } from 'react-router-dom';
import ContactMe from '../components/ContactMe';

const Home = () => {

  const copyToClipboard = () => {
    const email = 'mahaveer30032005@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };
  
  return (
    <div className='home animate-fade-in'>
      <div className="home-title animate-slide-in">
        <span className='icon'><FontAwesomeIcon icon={faCircle} /></span> Available for job right now
      </div>
      <div className="left animate-slide-in">
        <div className="profile">
          <div className="profile-stand">
            <img src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="right animate-slide-in">
        <p className='title'>
          I'm <span className="name">MAHAVEER</span>
        </p>
        <p className="description">
          a passionate and dedicated Full Stack Developer
        </p>
        <p className="contact-btns">
          <Link to='/contact-me' className='btn hire-me-btn animate-button'>
            <FontAwesomeIcon icon={faPlus} />
            Hire me
          </Link>
          <button className='btn send-email-btn animate-button' onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faPaperPlane} />
            Copy Email
          </button>
        </p>
      </div>
      <ContactMe />
    </div>
  )
}

export default Home;
