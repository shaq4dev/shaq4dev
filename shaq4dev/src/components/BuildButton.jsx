import React from 'react'

const BuildButton = ({ type }) => {
  return (
    <div className='buildBtn'>
      <button className='border-4 bg-button-blue-bg text-[14px] border-footer-blue text-button-blue rounded-3xl px-3 py-2 '>{type}</button>
    </div>
  )
}

export default BuildButton
