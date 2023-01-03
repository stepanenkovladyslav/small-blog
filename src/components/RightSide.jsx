import React from 'react'
import AddButton from './UI/AddButton/AddButton'

const RightSide = ({img, makeVisible, closeModal}) => {
  return (
    <div className='rightSide'>
      <AddButton makeVisible={makeVisible}/>
      <img src={img} className="rightSideImage" alt="webpages"></img>
    </div>
  )
}

export default RightSide