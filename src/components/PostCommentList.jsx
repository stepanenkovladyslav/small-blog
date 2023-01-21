import React from 'react'
import PostComment from './UI/PostComment/PostComment'
import style from '../pages/PostPage/PostPage.module.css'
import Pagelist from './Pagelist'
import CommentSection from './CommentSection'

  function getComments (comments, numberofpages, changePage, commentPage) {
      return (
        <>
        <CommentSection/>
        {comments.length > 0 ? 
        <>
        <h2 className={style.commentHeading}>Comment Section</h2> 
          <ul className={style.commentList}>{
            comments.map(comment => {
              return <PostComment title={comment.name} email={comment.email} body={comment.body} key={comment.id}/>
            })
          } </ul>
          <Pagelist numberofpages={numberofpages} changePage={changePage} page={commentPage}/>
          </>
          :
          <>
          <h2 className={style.commentHeading}>Comment Section</h2> 
          <h2 className={style.noComments}>There are no comments yet</h2>
          </>
          }

      </>
      )
  }



const PostCommentList = ({comments, numberofpages, changePage, page}) => {
  return (
      getComments(comments, numberofpages, changePage, page) 
  )
}

export default PostCommentList