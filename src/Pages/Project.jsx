import React, { useState } from 'react'
import { personal_projects, industry_projects } from '../project_data'
import ProjectPopup from '../components/ProjectPopup'


const Project = () => {

  const [popupData, setPopupData] = useState(null)
  
  const openPopup = (props) => {
    setPopupData(props);
  }

  const ProjectCard = ({index, data}) => {
    return (
      <div className="part" key={index}>
        <p className='project-title'>{data.title}</p>
        {data.company && <p className="company-name"><span>Company:</span> {data.company}</p>}
        <p className="tech-stack"><span><strong>Tech Stack:</strong></span> {data.tech}</p>
        <p className="role"><span>Role:</span> {data.role}</p>
        <div className="view-more-div">
          <button className="view-more" onClick={()=> openPopup(data)}>View Details</button>
        </div>
      </div>
    )
  }

  const PersonalProjects = () => {
    return personal_projects.map((project, index) => (
      <ProjectCard
        key={index}
        data = {project}
      />
    ))
  }

  const IndustryProjects = () => {
    return industry_projects.map((project, index) => (
      <ProjectCard 
        key={index}
        data = {project}
      />
    ))
  }

  return (
    <div className='projects'>
      {popupData && <ProjectPopup data={ popupData } />}
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
