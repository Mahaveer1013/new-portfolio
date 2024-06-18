import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import Profile from '../images/my_image1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div className='home'>
      <div className="home-title">
        <span className='icon'><FontAwesomeIcon icon={faCircle} /></span> Available for job right now
      </div>
      <div className="left">
        <div className="profile">
          <div className="profile-stand">
            <img src={Profile} alt={Profile} />
          </div>
        </div>
      </div>
      <div className="right">
        <p className='title'>
          I'm <span className="name">MAHAVEER</span>
        </p>
        <p className="description">
          a passionate and dedicated Full Stack Developer
        </p>
        <p className="contact-btns">
          <Link to='/contact-me' className='btn hire-me-btn'>
            <FontAwesomeIcon icon={faPlus} />
            Hire me
          </Link>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=mahaveer30032005%40gmail.com' className='btn send-email-btn'>
            <FontAwesomeIcon icon={faPaperPlane} />
            Copy Email
          </a>
        </p>
      </div>
    </div>
  )
}

export default Home