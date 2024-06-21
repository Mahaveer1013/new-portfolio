import React, { useEffect, useState } from 'react'
import { personal_projects, industry_projects } from '../project_data';
import { useParams } from 'react-router-dom';

const ProjectPopup = () => {

  const { type, index } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {  
    let data;
    if (type === 'personal_projects') {
      data = personal_projects;
    } else if (type === 'industry_projects') {
      data = industry_projects;
    } else {
      console.error('Invalid project type');
      return;
    }
    
    const projectIndex = parseInt(index);
    if (projectIndex >= 0 && projectIndex < data.length) {
      setProject(data[projectIndex]);
    } else {
      console.error('Project not found');
    }
  }, [type, index]);

  if (!project) {
    return <div className="project-popup-main">Loading...</div>;
  }

  const descriptionHTML = project.description.replace(/\n/g, '<br />');

  return (
    <div className='project-popup-main'>
      <div className="proj-title">
        <p>{project.title}</p>
      </div>
      {project.screenshot &&
        <div className="left">
          <div className="title"><span className="green">ScreenShot: </span></div>
          <img src={project.screenshot} alt={project.screenshot} />
        </div>
      }
      <div className="right">
        <div className="proj-details">
          <div className="project-table">
            <table border={'1px'}>
              <tbody>
                {project.title &&
                  <tr>
                    <th><span className="green">Title:</span></th>
                    <td> {project.title}</td>
                  </tr>
                }
                {project.company &&
                  <tr>
                    <th><span className="green">Company Name:</span></th>
                    <td> {project.company}</td>
                  </tr>
                }
                {project.link &&
                  <tr>
                    <th><span className="green">Link:</span></th>
                    <td> <a href={project.link} className='link-to-project'>Click here to view</a></td>
                  </tr>
                }
                {project.tech  &&
                  <tr>
                    <th><span className="green">Tech Stack:</span></th>
                    <td> {project.tech}</td>
                  </tr>
                }
                {project.role  &&
                    <tr>
                    <th><span className="green">Role:</span></th>
                    <td> {project.role}</td>
                  </tr>
                }
                {project.duration  &&
                  <tr>
                    <th><span className="green">Duration:</span></th>
                    <td> {project.duration}</td>
                  </tr>
                }
              </tbody>
          </table>
          </div>
          {project.description &&
            <p>
              <span className="green"><strong>Description:</strong></span> <br/><br/>
              <span dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
            </p>
          }
        </div>
      </div>
    </div>
  )
}

// title: 'Biometric Attendance and Employee Management System',
//         company: 'Kanchi Karpooram Limited',
//         tech: 'Html, Css, Js, Flask and Sqlalchemy',
//         role: 'Backend Developer',
//         description: `This Project is to achieve the strict constraints of the company for their attendance system.
//             I have worked as a backend developer in this project. We, A team of 4 members have been worked on this project.We use Flask for Backend and Html, Css, Js for Frontend. 

//             1. The project is basically about making a software for calculating the attendance for their employees.
//             2. There is already a software provided along with the biometric machine , which runs in their localhost and it has only basic constraint of attendance.
//             3. They download the excel sheet of attendance daily and employee modifies the data according to the company's constraint which takes around 1hr/per day...
//             4. Our software takes only the punch time and emp_number from that software's database and insert into our database every time a new punch data record added, and calculate attendance according to the constrainsts that company required... and provided many features they asked.
//             5. For database , we used SQLAlchemy (toolkit of python SQL) .`,
//         duration: '1 year',
//         screenshot: 'kkl.png',

export default ProjectPopup