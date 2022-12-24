import { useEffect, useMemo, useState } from "react";
import PostAPI from "../API/PostAPI";
import MainContent from "../components/MainContent";
import { usePosts } from "../hooks/usePosts";
import img from '../imageforrightside.png'

function BlogpostsPage () {

  const [blogposts,setBlogposts] = useState([]);
  const [initialBlogposts, setInitialBlogposts] = useState([]);
  const [searchText, setSearchText] = useState('') 
  const [activeSort,setActiveSort] = useState(false);
  const [numberOfPosts, setNumberOfPosts] = useState();
  const [page, setPage] = useState(1);
  /*
    const [controllerPosts,setControllerPosts] = useState({initialBlogPosts:[],blogPosts:[]})
    const [controllerSortSearch, setControllerSortSearch] = useState({searchText:'',activeSort:false}) 

    value = controllerSortSeatch.searchText

  */

  const posts = usePosts(blogposts,searchText,activeSort);

  async function load(page = 1) {
    try {
        const [postsForPage, postsCount] = await PostAPI.getAllPostsForPage(
            page
        );
        setBlogposts(postsForPage);
        setNumberOfPosts(+postsCount);
    } catch (e) {
        console.error(e);
    }
}
useEffect(() => {
    load(page);
}, [page]);

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

  const numberOfPages = useMemo(()=> {
    return numberOfPosts/blogposts.length;
  }, [numberOfPosts, blogposts]);


// Creating new post
  const [display, setDisplay] = useState("none");

  function makeVisible () {
      setDisplay("flex") 
  }

  function createNewPost (inputValue) {
    const newpost = {title: inputValue, id: 7};
    setDisplay("none");
    
    setBlogposts(previousState => {
        return [newpost, ...previousState]
    });
  }


  //Delete blogpost 
  function deleteBlogpost (index) {
      setBlogposts(blogposts.filter((post, idx)=> {if (idx !== index){ return post}}))
    }

    function changeSearch (value) {
      setSearchText(value);
    }


  return <>
    <MainContent blogposts={posts} numberOfPages={numberOfPages} rightImage={img} display={display} makeVisible={makeVisible} createNewPost={createNewPost} deleteBlogpost={deleteBlogpost} changePage={changePage} searchText={searchText} changeSearch={changeSearch} changeActiveSort={changeActiveSort}/>
    </>
  
}
export default BlogpostsPage;
