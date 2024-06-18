import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNode, FaReact, FaFire, FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di'; 
import { AiFillDatabase } from 'react-icons/ai'; 

const About = () => {

  return (
    <div className='about'>
      <div className='overview section'>
        <div className='title'>
          <span className="green">&lt; </span> Overview <span className="green">&gt;</span>
        </div>
        <div className='description'>
          <p>
            I'm Mahaveer A, a passionate and dedicated Full Stack Developer with a mission to create well-secured and attractive websites. With a deep understanding of both front-end and back-end technologies.<br /><br />
            Feel free to explore my portfolio to see examples of my work. Each project showcases my dedication to quality and my ability to adapt to different challenges and requirements.
          </p>
        </div>
        <div className='title'>
          <span className="green">&lt; &#47; &gt;</span>
        </div>
      </div>
      <div className='my-work section'>
        <div className="title">
          <span className="green">&lt; </span> About My Work <span className="green">&gt;</span>
        </div>
        <div className="description">
          <p>
            I am skilled in both front-end and back-end development, creating comprehensive web applications. I develop user interfaces, ensure responsive design, manage databases, handle server-side logic, and implement security measures.<br /><br />
            Additionally, I can manage integration, deployment, and servers while collaborating effectively with teams. My versatility and commitment to continuous learning make me essential for delivering robust and visually appealing web solutions.
          </p>
        </div>
        <div className="title">
          <span className="green">&lt; &#47; &gt;</span>
        </div>
      </div>
      <div className="skills section">
        <div className="title">
          <span className="green">&lt; </span> Skills <span className="green">&gt;</span>
        </div>
        <div className="description">
          <ul>
          <li><span><FaHtml5 /></span> HTML</li>
            <li><span><FaCss3Alt /></span> CSS</li>
            <li><span><FaJsSquare /></span> JavaScript</li>
            <li><span><FaPython /></span> Python</li>
            <li><span><FaPython /></span> Flask</li>
            <li><span><FaPython /></span> FastAPI</li>
            <li><span><FaPython /></span> Django (Basics)</li>
            <li><span><FaNode /></span> Node.js</li>
            <li><span><FaReact /></span> React.js</li>
            <li><span><DiMongodb /></span> MongoDB</li>
            <li><span><AiFillDatabase /></span> SQL</li>
            <li><span><FaFire /></span> Firebase</li>
            <li><span><FaGithub /></span> GitHub</li>
          </ul>
        </div>
        <div className="title">
          <span className="green">&lt; &#47; &gt;</span>
        </div>
      </div>
      <div className="section final-about">
        <div className="title">
          <span className="green">&lt; </span> Thats all about me <span className="green">&gt;</span>
        </div>
        <div className="description">
          <p>
            If you're interested in collaborating or have any questions, don't hesitate to get in touch. Thank you for visiting, and I look forward to the possibility of working together!
          </p>
        </div>
        <div className="title">
          <span className="green">&lt; &#47; &gt;</span>
        </div>
      </div>
    </div>
  )
}

export default About