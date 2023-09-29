import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <div>
      <div className="heroContainer pt-[90px]">

        {/* text */}
        <HeroText/>

        {/* image */}
        <HeroImage/>
        
      </div>
    </div>
  )
}

export default Hero
