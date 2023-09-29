import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <div>
      <form action="submit" className='mx-10 font-workSansReg mb-16'>
        <FormEl type='text' text='First Name' />
        <FormEl type='text' text='Last Name' />
        <FormEl type='email' text='Email' />
        <FormEl type='text' text='Telephone' />
        <div className="message flex flex-col my-2">
            <label>Message</label>
            <textarea placeholder='Send us a message' className='my-5 outline outline-2 outline-button-blue px-2 py-2 rounded-sm' rows={5}/>
        </div>
        <Button text='Submit'/>
      </form>
    </div>
  )
}

export default ContactForm

function FormEl ({ text, type }){
    return (
        <div className="firstname flex flex-col">
            <label className='py-2'>{text}</label>
            <input type={type} placeholder={text} className='outline outline-2 outline-button-blue rounded-sm py-1 px-2 mb-3' />
        </div>
    )
}