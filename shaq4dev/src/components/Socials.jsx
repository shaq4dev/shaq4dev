import React from 'react'
import Email from '../images/email.png'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Stackoverflow from '../images/stackoverflow.png'
import Whatsapp from '../images/whatsapp.png'

const Socials = () => {

  const socials = meta.map(social => (
    <li key={social.key}>
        <a href={social.link}>
            <img src={social.src} alt={social.name} className='w-8' />
        </a>
    </li>
  ))

  return (
    <div className='socials'>
      <ul className='flex items-center justify-between mx-12 pt-5 pb-10'>{socials}</ul>
    </div>
  )
}

export default Socials

const meta = [
    {
        key:0, 
        name: 'stack-overflow',
        src: Stackoverflow,
        link: 'https://stackoverflow.com/users/21684977/shaquille-blackwood'
    },
    {
        key:1, 
        name: 'github',
        src: Github,
        link: 'https://github.com/shaq4dev'
    },
    {
        key:2, 
        name: 'whatsapp',
        src: Whatsapp,
        link: 'https://wa.me/18768465515'
    },
    {
        key:3, 
        name: 'linkedIn',
        src: Linkedin,
        link: 'https://www.linkedin.com/in/shaq4dev/'
    },
    {
        key:4, 
        name: 'email',
        src: Email,
        link: 'mailto:shaquille.blackwood95@gmail.com'
    },
]