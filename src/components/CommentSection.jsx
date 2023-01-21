import React from 'react'
import style from '../pages/PostPage/PostPage.module.css'

const CommentSection = () => {
  return (
    <div className={style.commentSection}>
          <input type="text" placeholder='Write your comment' className={style.commentInput}></input>
          <input type="submit" value="Submit" className={style.commentSubmit}></input>
    </div>
  )
}

export default CommentSection