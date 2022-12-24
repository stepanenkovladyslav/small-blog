import React, { useEffect, useState } from 'react'
import { resolvePath, useNavigate, useParams } from 'react-router-dom';
import PostCommentList from '../components/PostCommentList';
import style from './PostPage.module.css'
import PostAPI from "../API/PostAPI";
import CommentAPI from '../API/CommentAPI';
import axios from 'axios';

const PostPage = () => {

  const navigate = useNavigate("*");
  const params = useParams();
  
  const [post, setPost] = useState({});

  const [comments, setComments] = useState([])

  useEffect(()=> {
    async function getBlogpost() {
      try {
        const post = await PostAPI.getOnePost(params.id);
        setPost(post);
      } catch(error) {
        navigate('*')
      }
    }
    getBlogpost();
  },[])

  useEffect(()=> {
    async function getComments() {
      const data = await CommentAPI.getComments(params.id);
      setComments(data);
      }
    getComments()
  },[])
  
  return (
    <div className={style.postContainer}>
        <div className={style.post}>
            <h1 className={style.postTitle}>{post.title}</h1>
            <p className={style.postBody}>{post.body}</p>
            <div className={style.commentSection}>
              <input type="text" placeholder='Write your comment' className={style.commentInput}></input>
              <input type="submit" value="Submit" className={style.commentSubmit}></input>
              <PostCommentList comments={comments}/>
            </div>
        </div>
    </div>
  )
}

export default PostPage