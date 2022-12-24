import React from 'react'
import PostComment from './UI/PostComment/PostComment'
import style from '../pages/PostPage.module.css'

const PostCommentList = ({comments}) => {
  return (
    <>
        <h2>Comment Section</h2>
        <ul className={style.commentList}>{
          comments.map(comment => {
            return <PostComment title={comment.name} email={comment.email} body={comment.body} key={comment.id}/>
          })
        }
        </ul>
    </>
  )
}

export default PostCommentList