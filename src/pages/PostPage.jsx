import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PostCommentList from '../components/PostCommentList';
import Post from '../components/Post';
import PostAPI from "../API/PostAPI";
import CommentAPI from '../API/CommentAPI';
import { usePagination } from '../hooks/usePagination';
import style from './PostPage.module.css'

const PostPage = () => {

  const navigate = useNavigate("*");
  const params = useParams();
  
  const [post, setPost] = useState();
  const [commentPage, setCommentPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [limitCommPerPage, setLimitCommPerPage] = useState(2);
  const [commentCount, setCommentCount] = useState();

  async function getBlogpost() {
    try {
      const post = await PostAPI.getOnePost(params.id);
      setPost(post);
    } catch(error) {
      navigate('*')
    }
  }

  useEffect(()=> {
    getBlogpost();
  },[])

  async function getComments (params, limit, page) {
      const [pageComments, allComments] = await CommentAPI.getComments(params.id, limit, page);
      setComments(pageComments);
      setCommentCount(allComments);
  }
  useEffect(()=> {
    getComments(params,limitCommPerPage, commentPage)
  },[commentPage])

  function changePage (page) {
    setCommentPage(page);
  }
  const numberOfPages = usePagination(commentPage, commentCount, limitCommPerPage)
 
  return (
    <div className={style.postContainer}>
        <Post post={post}/>
        <PostCommentList comments={comments} numberofpages={numberOfPages} changePage={changePage}/>
    </div>
  )
  }

export default PostPage