import React from 'react'
import Blogpost from './Blogpost'
import CreatePostBlock from './UI/CreatePostBlock/CreatePostBlock'



const Blogposts = (props) => {
  return (
    <ul className='blogposts-list'>
      <CreatePostBlock display={props.display} createNewPost={props.createNewPost} />
        {
          props.blogposts.map((blogpost, index)=> {
            return <Blogpost blogpost={blogpost} index={index} deleteBlogpost={props.deleteBlogpost} key={index} />
          })
        }
    </ul>
  )
}


export default Blogposts