import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';



const Blogpost = (props) => {

  return (
    <li className='blogpost'><div className="text"><span>{props.blogpost.id}</span><NavLink to={`post/${props.blogpost.id}`}>{props.blogpost.title}</NavLink></div><button className='delete' onClick={(e)=> props.deleteBlogpost(props.index)}>Delete</button></li>
  )
}

export default Blogpost