import React from 'react'
import { useState } from 'react'
import style from '../pages/PostPage/PostPage.module.css'

const CommentSection = (props) => {
    console.log(props.comments)
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const createNewComment = (props) => {
        props.setComments([...props.comments, {id: 1, postId: 1, email: name, name: title, body: body}]);
        setName('');
        setTitle('');
        setBody('')
    }

  return (
    <div className={style.commentSection}>
        <div className={style.commentContainer}>
        <h3 className={style.newCommentHeading}>Name</h3>
        <input type="text" className={style.commentName} value={name} onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div className={style.commentContainer}>
        <h3 className={style.newCommentHeading}>Title</h3>
        <input type="text" className={style.commentTitle} value={title} onChange={(e)=> setTitle(e.target.value)}></input>
        </div>
        <div className={style.commentContainer}>
        <h3 className={style.newCommentHeading}>Body</h3>
        <input type="text" className={style.commentBody} value={body} onChange={(e)=> setBody(e.target.value)}></input>
        </div>
        <input type="submit" value="Submit" className={style.commentSubmit} onClick={()=> createNewComment(props)}></input>
    </div>
  )
}

export default CommentSection