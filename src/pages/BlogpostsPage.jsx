import { useEffect, useMemo, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import PostAPI from "../API/PostAPI";
import MainContent from "../components/MainContent";
import { usePosts } from "../hooks/usePosts";
import img from '../imageforrightside.png'
import { useRequest } from "../hooks/useRequest";

function BlogpostsPage () {

  const [blogposts,setBlogposts] = useState([]);
  const [searchText, setSearchText] = useState('') 
  const [activeSort,setActiveSort] = useState(false);
  const [numberOfPosts, setNumberOfPosts] = useState();
  const [page, setPage] = useState(1);
  const [limitPostsPerPage, setLimitPostsPerPage] = useState(5);


  const posts = usePosts(blogposts,searchText,activeSort);

  const [request, loading, error] = useRequest(
    async (page = 1) => {
      const [postsForPage, postsCount] = await PostAPI.getAllPostsForPage(page, limitPostsPerPage);
      setBlogposts(postsForPage);
      setNumberOfPosts(+postsCount);
    }
  )
  useEffect(() => {
      request(page);
  }, [page, limitPostsPerPage]);



  const numberOfPages = usePagination(page, numberOfPosts, limitPostsPerPage);

  function changeActiveSort () {
    setActiveSort(activeSort ? false : true)
  }  

  function changePage(newPage) {
    console.log(newPage)
    if (newPage > 0 && newPage <= Math.round(numberOfPosts/limitPostsPerPage)) {
      setPage(newPage);
    } else {
      return page
    }
    
}

// Creating new post
  const [activeModal, setActiveModal] = useState(false);

  function makeVisible () {
      setActiveModal(true); 
  }

  function createNewPost (inputValue) {
    const newpost = {title: inputValue, id: 7};
    setActiveModal(false);
    setBlogposts(previousState => {
        return [newpost, ...previousState]
    });
  }


  //Delete blogpost 
  function deleteBlogpost (index) {
      setBlogposts(blogposts.filter((post, idx)=> {if (idx !== index){ return post}}))
      setNumberOfPosts(numberOfPosts - 1)
    }

    function changeSearch (value) {
      setSearchText(value);
    }


  return <>
    <MainContent blogposts={posts} numberOfPages={numberOfPages} rightImage={img} display={activeModal} makeVisible={makeVisible} createNewPost={createNewPost} deleteBlogpost={deleteBlogpost} changePage={changePage} searchText={searchText} changeSearch={changeSearch} changeActiveSort={changeActiveSort} loading={loading} page={page}/>
    </>
  
}
export default BlogpostsPage;
