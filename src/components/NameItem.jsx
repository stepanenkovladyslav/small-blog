import React from 'react'

const NameItem = ({name,deleteName}) => {
  return (
    <div>
        <h4 >{name}</h4>
        <button onClick={() => deleteName(name)}>Delete</button>
    </div>
  )
}

export default NameItem