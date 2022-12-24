import React from 'react'

const Logo = ({logo}) => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Logo"></img>
    </div>
  )
}

export default Logo