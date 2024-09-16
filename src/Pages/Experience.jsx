import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { experience } from '../project_data';
import { FaStar } from 'react-icons/fa';

const Experience = () => {
    return (
        <div>
            <div className="title" style={{marginBottom:'10px'}}>
                <span className="green">&lt;</span> Experience <span className="green">&gt;</span>
            </div>
            <VerticalTimeline>
                {experience.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work vertical-timeline-element--hover"
                        contentStyle={{ background: item.contentBackground, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid ${item.contentBackground}` }}
                        date={item.date}
                        iconStyle={{ background: item.iconBackground, color: '#fff' }}
                        icon={item.icon}  // Conditional Icon
                    >
                        {item.image && (
                            <div style={{ marginBottom: '15px', textAlign: 'center' }}>
                                <img src={item.image} alt={item.title} style={{ width: '30%', height: 'auto', borderRadius: '8px' }} />
                            </div>
                        )}
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                        <p>{item.description}</p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaStar />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience