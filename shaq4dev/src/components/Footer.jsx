import React from 'react'
import Logo from '../images/white_logo.png'
import Socials from './Socials'

const Footer = () => {

  const d = new Date()
  const year = d.getFullYear()

  return (
    <div className='text-white bg-footer-blue w-full'>
      <div className="logo">
        <img src={Logo} alt="logo" className='w-36 mx-auto py-5' />
      </div>
      <QuickLinks/>
      <p className="s4d text-2xl font-workSansReg font-bold text-center">@shaq4dev</p>
      <p className="s4d text-2xl font-workSansReg font-bold text-center pt-8">Socials</p>
      <Socials/>
      <div className="bg-copyright-blue flex flex-col py-3">
        <p className='font-workSansReg text-[12px] text-center'>©{year} shaq4dev, All Rights Reserved</p>
        <p className="flex items-center text-[12px] justify-center">
          Made by 
          <span className='pl-2'>
            <img src={Logo} alt="logo" className='w-4' />
          </span>
        </p>
      </div>
    </div>

  )
}

export default Footer

// Quick Links

function QuickLinks (){

  const meta = [
    {
      id: 0, 
      name: 'about',
      link: '#about'
    },
    {
      id: 1, 
      name: 'experience',
      link: '#experience'
    },
    {
      id: 2, 
      name: 'projects',
      link: '#projects'
    },
  ]

  const links = meta.map(link => (
    <li key={link.id} className='py-[2px]'><a href={link.link}>{link.name}</a></li>
  ))

  return (
    <div className='pb-5'>
      <p className="QL font-bold text-white text-center font-workSansReg text-2xl py-3">
        Quick Links
      </p>
      <ul className='text-center text-white font-workSansReg text-lg'>
        {links}
      </ul>
    </div>
  )
}

