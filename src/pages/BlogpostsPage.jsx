import { useEffect, useMemo, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import PostAPI from "../API/PostAPI";
import MainContent from "../components/MainContent";
import { usePosts } from "../hooks/usePosts";
import img from '../imageforrightside.png'
import { useRequest } from "../hooks/useRequest";

function BlogpostsPage () {

  const [blogposts,setBlogposts] = useState([]);
  const [initialBlogposts, setInitialBlogposts] = useState([]);
  const [searchText, setSearchText] = useState('') 
  const [activeSort,setActiveSort] = useState(false);
  const [numberOfPosts, setNumberOfPosts] = useState();
  const [page, setPage] = useState(1);
  const [limitPostsPerPage, setLimitPostsPerPage] = useState(5);
  /*
    const [controllerPosts,setControllerPosts] = useState({initialBlogPosts:[],blogPosts:[]})
    const [controllerSortSearch, setControllerSortSearch] = useState({searchText:'',activeSort:false}) 

    value = controllerSortSeatch.searchText

  */

  const posts = usePosts(blogposts,searchText,activeSort);

  const [request, loading, error] = useRequest(
    async (page = 1) => {
      console.log(page)
      const [postsForPage, postsCount] = await PostAPI.getAllPostsForPage(page, limitPostsPerPage);
      setBlogposts(postsForPage);
      setNumberOfPosts(+postsCount);
    }
  )
useEffect(() => {
    request(page);
}, [page, limitPostsPerPage]);


  const numberOfPages = usePagination(numberOfPosts, limitPostsPerPage);

  function changeActiveSort () {
    setActiveSort(activeSort ? false : true)
    //setControlllerSortSeatch({...controllerSortSearch, activeSort: activeSort ? false: true })
  }  

  function changePage(page) {
    setPage(page);
}


  useEffect(()=> {
    async function getAllPosts (){
      const data = await PostAPI.getAllPosts();
      setInitialBlogposts(data);
    }
    getAllPosts()
  }, [])

  // const numberOfPages = useMemo(()=> {
  //   return numberOfPosts/blogposts.length;
  // }, [numberOfPosts, blogposts]);


// Creating new post
  const [activeModal, setActiveModal] = useState(false);

  function makeVisible () {
      setActiveModal(true) 
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
    <MainContent blogposts={posts} numberOfPages={numberOfPages} rightImage={img} display={activeModal} makeVisible={makeVisible} createNewPost={createNewPost} deleteBlogpost={deleteBlogpost} changePage={changePage} searchText={searchText} changeSearch={changeSearch} changeActiveSort={changeActiveSort} loading={loading}/>
    </>
  
}
export default BlogpostsPage;
