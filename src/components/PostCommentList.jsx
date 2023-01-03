import React from 'react'
import PostComment from './UI/PostComment/PostComment'
import style from '../pages/PostPage.module.css'
import Pagelist from './Pagelist'

  function getComments (comments, numberofpages, changePage) {
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
          <Pagelist numberofpages={numberofpages} changePage={changePage} />
          </ul>
          </div>
      </>
      )
    }
  }


const PostCommentList = ({comments, numberofpages, changePage}) => {
  return (
    getComments(comments, numberofpages, changePage)
  )
}

export default PostCommentList