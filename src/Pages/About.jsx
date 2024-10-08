import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNode, FaReact, FaFire, FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { AiFillDatabase } from 'react-icons/ai';

const About = () => {
  return (
    <section>
      <div className='about'>
        <div className='overview section animate-slide-in-left'>
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
        <div className='my-work section animate-slide-in-right'>
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
        <div className="skills section animate-slide-in-left">
          <div className="title">
            <span className="green">&lt; </span> Skills <span className="green">&gt;</span>
          </div>
          <div className="description">
            <ul>
              <li><span><FaHtml5 /></span> HTML</li>
              <li><span><FaCss3Alt /></span> CSS (Tailwind, Bootstrap)</li>
              <li><span><FaJsSquare /></span> JavaScript</li>
              <li><span><FaPython /></span> Python (Flask, Django)</li>
              <li><span><FaPython /></span> API development </li>
              <li><span><FaNode /></span> Node.js</li>
              <li><span><FaReact /></span> React.js (NextJS)</li>
              <li><span><DiMongodb /></span> NoSQL (MongoDB, FireStore)</li>
              <li><span><AiFillDatabase /></span> SQL (Postgres, SqLite, MySql)</li>
              <li><span><FaFire /></span> Cloud (Firebase)</li>
              <li><span><FaGithub /></span> Git & GitHub</li>
            </ul>
          </div>
          <div className="title">
            <span className="green">&lt; &#47; &gt;</span>
          </div>
        </div>
        <div className="section final-about animate-slide-in-right">
          <div className="title">
            <span className="green">&lt; </span> That's all about me <span className="green">&gt;</span>
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
    </section>
  )
}

export default About;
