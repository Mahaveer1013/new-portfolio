import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <NavLink to='/'>
                    <span className="green">&lt; </span> &#47; <span className="green"> &gt;</span>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/about'>
                            <span className='icon'><FontAwesomeIcon icon={faAddressCard} /></span>
                            <p>About</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>
                            <span className='icon'><FontAwesomeIcon icon={faListCheck} /></span>
                            <p>Projects</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-me'>
                            <span className='icon'><FontAwesomeIcon icon={faPhone} /></span>
                            <p>Contact Me</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header