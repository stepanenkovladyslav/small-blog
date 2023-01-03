import React from 'react'
import { useState } from 'react'
import style from './CreatePostBlock.module.css'

let inputvalue;

const CreatePostBlock = ({display, createNewPost, }) => {

  const classes = display ? `${style.newPostBlock} ${style.active}` : style.newPostBlock

  return (
    <div className={classes}>
        <input type="text" className={style.createPostName} placeholder='Enter the name of the blogpost' onChange={(e)=> inputvalue = e.target.value} onBlur={(e)=>e.target.value=""}/>
        <button className={style.addPost} onClick={()=>createNewPost(inputvalue)} >Add</button>
        </div>
  )
}

export default CreatePostBlock