import React from 'react'
import Button from './Button'

const HeroText = () => {
  return (
    <div className='lg:w-[50%] px-10'>
        <h1 className="font-workSansReg text-6xl text-center pt-20 pb-8 w-[100%] lg:text-start text-button-blue">Hello, I'm Shaquille</h1>
        <p className="text-justify text-[18px]">
            I am an aspiring software engineer who loves web development and believes in the Lord Jesus Christ and his finished work on the cross.
        </p>
        <div className="buttonWrapper flex flex-col  pt-5 gap-2 lg:flex-row lg:justify-start">
            <Button text='About' link='./about-us'/>
            <Button text='Projects' link='./projects'/>
        </div>
    </div>
  )
}

export default HeroText
