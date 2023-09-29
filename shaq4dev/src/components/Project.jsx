import React from 'react'
import BBE from '../images/biblexplosionorg.png'
import RamoneG from '../images/ramonegrahamcom.png'
import Point from '../images/link-pointer.png'

const Project = () => {

    const projects = meta.map(project => (
        <li key={project.id} className=''>
            <img src={project.src} alt={project.name} />
            <a href={project.link} className='font-bold text-[18px] flex items-center my-5 text-footer-blue'>
                {project.name}
                <img src={Point} alt="pointer" className='w-4'/>
            </a>
            <p className='mb-16'>{project.description}</p>
        </li>
    ))

  return (
    <div>
      <ul className='mx-8'>
        {projects}
      </ul>
    </div>
  )
}

export default Project

const meta = [
    {
        id: 0, 
        name: 'Bible Explosion Org',
        link: 'https://biblexplosiongroup.org',
        description: 'This is a Christian website that seeks to offer bible study resources for everyone who has interest in learning the scriptures. Currently, this site is still under construction and will be ready before the close of 2023. ', 
        src: BBE
    },
    {
        id: 1, 
        name: 'ramonegraham.com',
        link: 'https://github.com/shaq4dev/ramonegraham.com',
        description: 'This is a mock-up of a profession biography for Ramone Graham. It highlights his professional journey over the years and lists all his projects that he’s been proud to be a part of. ', 
        src: RamoneG
    },
]