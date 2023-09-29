import React from 'react'
import BuildButton from './BuildButton'

const Experience = ({ 
    position, 
    company, 
    role,
    career,
    paragraph,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
 }) => {
  return (
    <div className='wrapper '>
      <div className="role">
        <div className="job font-bold text-[16px] mx-5 text-center text-footer-blue">
            {position} • {company}
        </div>
        <p className='text-center mt-[6px] text-button-blue'>{role}</p>
        <p className='text-center mt-[2px] mb-5 text-button-blue'> {career} </p>
      </div>
      <div className="paragraph mx-8 text-justify">
        {paragraph}
      </div>
      <div className="build mx-8 py-5 flex flex-wrap gap-1">
        <BuildButton type={btn1}/>
        <BuildButton type={btn2}/>
        <BuildButton type={btn3}/>
        <BuildButton type={btn4}/>
        <BuildButton type={btn5}/>
        <BuildButton type={btn6}/>
      </div>
    </div>
  )
}

export default Experience
