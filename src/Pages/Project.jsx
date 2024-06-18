import React from 'react'
import { personal_projects, industry_projects } from '../project_data'

const Project = () => {

  const ProjectCard = (props) => {
    return (
      <div className="part">
        <p className='project-title'>{props.title}</p>
        {props.company && <p className="company-name"><span>Company:</span> {props.company}</p>}
        <p className="tech-stack"><span><strong>Tech Stack:</strong></span> {props.tech}</p>
        <p className="role"><span>Role:</span> {props.role}</p>
        <div className="view-more-div">
          <button className="view-more">View Details</button>
        </div>
      </div>
    )
  }

  const PersonalProjects = () => {
    return personal_projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        company={project.company}
        tech={project.tech}
        role={project.role}
      />
    ))
  }

  const IndustryProjects = () => {
    return industry_projects.map((project, index) => (
      <ProjectCard 
        key={index}
        title={project.title}
        company={project.company}
        tech={project.tech}
        role={project.role}
      />
    ))
  }

  return (
    <div className='projects'>
      <div className="work-experiences">
        <div className="title">
          <span className="green">&lt;</span> Industry Projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          {IndustryProjects()}
        </div>
      </div>
      <div className="personal-projects">
        <div className="title">
          <span className="green">&lt;</span> Personal projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          {PersonalProjects()}
        </div>
      </div>
    </div>
  )
}

export default Project
