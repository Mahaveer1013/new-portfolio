import { faCircle, faHome, faAddressCard, faPhone, faListCheck, faContactBook } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  return (
    <footer>
      <div className="title">
        <span className="green"><FontAwesomeIcon icon={faCircle} /></span> Available for job
      </div>
      <div className="title" style={{padding: '15px 0'}}>
        Pages
      </div>
      <div className="links">
        <a href="/"><FontAwesomeIcon icon={faHome} /> Home</a>
        <a href="/about"><FontAwesomeIcon icon={faAddressCard} /> About</a>
        <a href="/projects"><FontAwesomeIcon icon={faListCheck} /> Experience</a>
        <a href="/contact-me"><FontAwesomeIcon icon={faPhone} /> Contact-me</a>
      </div>
      <div className="title" style={{padding: '15px 0'}}>
        <span className="green"><FontAwesomeIcon icon={faContactBook} /></span> Contact
      </div>
      <div className="links">
        <a href="https://github.com/Mahaveer1013/" target='_blank'><FaGithub /> Github</a>
        <a href="https://linkedin.com/in/mahaveer1013" target='_blank'><FaLinkedin /> Linked In</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahaveer30032005%40gmail.com" target='_blank'><FaGoogle /> Gmail</a>
      </div>
    </footer>
  )
}

export default Footer