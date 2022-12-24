import React from 'react'
import { useState } from 'react'
import style from './CreatePostBlock.module.css'

let inputvalue;

const CreatePostBlock = ({display, createNewPost, }) => {
  return (
    <div className={style.newPostBlock} style={{display: display}}>
        <input type="text" className={style.createPostName} placeholder='Enter the name of the blogpost' onChange={(e)=> inputvalue = e.target.value} onBlur={(e)=>e.target.value=""}/>
        <button className={style.addPost} onClick={()=>createNewPost(inputvalue)} >Add</button>
        </div>
  )
}

export default CreatePostBlock