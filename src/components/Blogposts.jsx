import React from 'react'
import Blogpost from './Blogpost'
import CreatePostBlock from './UI/CreatePostBlock/CreatePostBlock'



const Blogposts = (props) => {
  return (
    <ul className='blogposts-list'>
      <CreatePostBlock display={props.display} createNewPost={props.createNewPost}/>
        {
          props.blogposts.length == 0 && props.loading == false ? 
          <h1>post deleted</h1>
          :
          props.blogposts.map((blogpost, index)=> {
            return <Blogpost blogpost={blogpost} index={index} deleteBlogpost={props.deleteBlogpost} key={index} />
          })
        }
    </ul>
  )
}


export default Blogposts