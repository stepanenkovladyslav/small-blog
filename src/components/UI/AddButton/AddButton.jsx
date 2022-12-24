import React from 'react'
import style from './AddButton.module.css'


const AddButton = ({makeVisible}) => {
  return (
    <button className={style.addButton} onClick={()=> makeVisible()}>Add</button>
  )
}

export default AddButton