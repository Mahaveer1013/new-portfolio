import React from 'react'

const ProjectPopup = ({ data }) => {
    console.log(data.screenshot);
  return (
        <div className='project-popup-main'>
          <div className="project-popup">
            {data && <div className="left">
                <img src={data.screenshot} alt={data.screenshot} />
            </div>}
            <div className="right">
                
            </div>
          </div>
        </div>
    )
}

export default ProjectPopup