import React from 'react'
import { personal_projects, industry_projects } from '../project_data'
import { Link } from 'react-router-dom'


const Project = () => {

  const ProjectCard = ({ data, type, index }) => {
    console.log(`${type}/${index}`);
    return (
      <div className="part" key={index}>
        <p className='project-title'>{data.title}</p>
        {data.company && <p className="company-name"><span>Company:</span> {data.company}</p>}
        <p className="tech-stack"><span><strong>Tech Stack:</strong></span> {data.tech}</p>
        <p className="role"><span>Role:</span> {data.role}</p>
        <div className="view-more-div">
          <Link to={`${type}/${index}`} className="view-more">View Details</Link>
        </div>
      </div>
    )
  }

  const PersonalProjects = () => {
    return personal_projects.map((project, index) => (
      <ProjectCard
        key={index}
        index = {index}
        data = {project}
        type = 'personal_projects'
      />
    ))
  }

  const IndustryProjects = () => {
    return industry_projects.map((project, index) => (
      <ProjectCard 
        key={index}
        index={index}
        data={project}
        type = 'industry_projects'
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
