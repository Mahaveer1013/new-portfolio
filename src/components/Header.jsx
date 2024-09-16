import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faArrowUp, faHome } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck'
import { NavLink, useLocation } from 'react-router-dom'
import { hover } from '@testing-library/user-event/dist/hover'

const Header = () => {

    const location = useLocation();

    const symbol = () => {
        return <>
            <span className="green">&lt; </span> &#47; <span className="green"> &gt;</span>
        </>
    }

    return (
        <header>
            <div className="logo">
                <NavLink to='/'>
                    {location.pathname == '/'
                        ? symbol
                        : <span><FontAwesomeIcon icon={faHome} style={{ fontSize: '18px'}}/></span>
                    }


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
                        <NavLink to='/experience'>
                            <span className='icon'><FontAwesomeIcon icon={faArrowUp} /></span>
                            <p>Experience</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>
                            <span className='icon'><FontAwesomeIcon icon={faListCheck} /></span>
                            <p>Projects</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header