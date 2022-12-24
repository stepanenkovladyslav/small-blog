import React from 'react'
import style from './PostComments.module.css'

const PostComment = (props) => {
  return (
    <li className={style.comment}><p className={style.name}>Name: {props.email}</p> <p className={style.title}>Title: {props.title} </p><p>Body: {props.body}</p></li>
  )
}

export default PostComment