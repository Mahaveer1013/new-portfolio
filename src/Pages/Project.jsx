import React from 'react'

const Project = () => {

  const Projects = (props) => {
    return (
        <div className="part">
          <p className='project-title'><span>{props.title} </span></p>
          { props.company && <p className="company-name"><span>Company:</span> {props.company}</p>}
          <p className="tech-stack"><span>Tech Stack:</span> {props.tech}</p>
          <p className="role"><span>Role:</span> {props.role}</p>
          <div className="view-more-div">
            <button className="view-more">View Details</button>
          </div>
        </div>
    ) 
  }

  return (
    <div className='projects'>
      <div className="work-experiences">
        <div className="title">
          <span className="green">&lt;</span> Industry Projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          <Projects
            title='Biometric Attendance and Employee Management System'
            company='Kanchi Karpooram Limited'
            tech='Html, Css, Js, Flask and Sqlalchemy'
            role='Backend Developer'
          />
          <Projects
            title='Internship'
            company='Altruisty'
            tech='Node Js, React Js, Firebase'
            role='Full Stack Developer'
          />
        </div>
      </div>
      <div className="personal-projects">
        <div className="title">
          <span className="green">&lt;</span> Personal projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          <Projects
            title='Real Time Chat Application'
            tech='Flask, MongoDb and React Js'
            role='Full Stack Developer'
          />
          <Projects
            title='Real Time Chat Application'
            tech='MERN Stack'
            role='Full Stack Developer'
          />
          <Projects
            title='Personal portfolio'
            tech='React Js'
            role='Frontend Developer'
          />
          <Projects
            title='Whatsapp Clone'
            tech='Html, Css, Js'
            role='Frontend Developer'
          />
          <Projects
            title='College Event page'
            tech='React Js, Node Js, Mongo Db'
            role='Full Stack Developer'
          />
          <Projects
            title='Socket IO Project'
            tech='Html, Css, js, Flask, SocketIO'
            role='Full Stack Developer'
          />
        </div>
      </div>
    </div>
  )
}

export default Project