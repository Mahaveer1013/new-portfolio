import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import ContactMe from './ContactMe'
import Home from './Home'
import Project from './Project'
import Footer from '../components/Footer'
import Particle from '../components/Particle'

export const Main = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Particle />
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact-me' element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
