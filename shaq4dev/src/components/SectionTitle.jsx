import React from 'react'

const SectionTitle = ({ text, call }) => {
  return (
    <div id={call}>
      <h3 className="text-center text-button-blue font-RobotoSerif text-6xl pt-10 pb-16">{text}</h3>
    </div>
  )
}

export default SectionTitle
