import React from 'react';
import { personal_projects, industry_projects } from '../project_data';
import { Link } from 'react-router-dom';
import Experience from './Experience';
import useIntersectionObserver from '../components/useIntersectionObserver';

const ProjectCard = ({ data, type, index }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      className={`part ${isIntersecting ? 'animate' : ''}`}
      key={index}
      ref={ref}
    >
      <p className='project-title'>{data.title || 'Untitled Project'}</p>
      {data.company && <p className="company-name"><span>Company:</span> {data.company}</p>}
      <p className="tech-stack"><span><strong>Tech Stack:</strong></span> {data.tech}</p>
      <p className="role"><span>Role:</span> {data.role}</p>
      <div className="view-more-div">
        <Link to={`${type}/${index}`} className="view-more">View Details</Link>
      </div>
    </div>
  );
}

const Project = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div className='projects'>
      <div className="work-experiences" style={{ marginTop: '10px' }}>
        <div className="title">
          <span className="green">&lt;</span> Industry Projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          {industry_projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              data={project}
              type='industry_projects'
            />
          ))}
        </div>
      </div>
      <div className="personal-projects" style={{ marginTop: '10px' }}>
        <div className="title">
          <span className="green">&lt;</span> Personal Projects <span className="green">&gt;</span>
        </div>
        <div className="lists">
          {personal_projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              data={project}
              type='personal_projects'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
