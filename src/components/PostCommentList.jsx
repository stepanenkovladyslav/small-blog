import React from 'react'
import PostComment from './UI/PostComment/PostComment'
import style from '../pages/PostPage.module.css'
import Pagelist from './Pagelist'

  function getComments (comments, numberofpages, changePage, commentPage) {
    if (comments) {
      return (
        <>
      <div className={style.commentSection}>
          <input type="text" placeholder='Write your comment' className={style.commentInput}></input>
          <input type="submit" value="Submit" className={style.commentSubmit}></input>
        
          <h2>Comment Section</h2>
          <ul className={style.commentList}>{
            comments.map(comment => {
              return <PostComment title={comment.name} email={comment.email} body={comment.body} key={comment.id}/>
            })
          }
          <Pagelist numberofpages={numberofpages} changePage={changePage} page={commentPage}/>
          </ul>
          </div>
      </>
      )
    }
  }


const PostCommentList = ({comments, numberofpages, changePage, page}) => {
  console.log()
  return (
    getComments(comments, numberofpages, changePage, page)
  )
}

export default PostCommentList