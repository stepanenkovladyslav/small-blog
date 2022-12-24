import React from 'react'
import NameItem from './NameItem'

export const NamesList = ({names,deleteName}) => {
  return (
    <div>
        {
            names.map((name,idx)=><NameItem name={name} key={idx} deleteName={deleteName} />)
        }
    </div>
  )
}
