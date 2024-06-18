import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer>
          <div className="title">
          <span className="green"><FontAwesomeIcon icon={faCircle} /></span> Available for job
            </div>
            <div className="links">
                <a href="https://github.com/Mahaveer1013/"><FaGithub /> Github</a>
                <a href="https://linkedin.com/in/mahaveer1013"><FaLinkedin /> Linked In</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahaveer30032005%40gmail.com"><FaGoogle /> Gmail</a>
            </div>
        </footer>
    )
}

export default Footer