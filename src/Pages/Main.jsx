import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Project from './Project'
import Footer from '../components/Footer'
import Particle from '../components/Particle'
import ProjectPopup from '../components/ProjectPopup'
import ScrollToTop from '../components/ScrollToTop'
import Experience from './Experience'

export const Main = () => {
  return (
    <BrowserRouter>
      <div className='main'>
        <Particle />
        <Header />
        <ScrollToTop />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/projects/:type/:index' element={<ProjectPopup />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
