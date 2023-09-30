import React from 'react'
import ImgHero from '../images/hero-image.png'
import Socials from './Socials'

const HeroImage = () => {
  return (
    <div className='w-1/2 lg:flex lg:items-center bg-blue-300'>
      <img
            src={ImgHero}
            alt='shaquille-hero'
            className=' w-80 mx-auto pt-8 pb-5'
        />
        <Socials/>
    </div>
  )
}

export default HeroImage
