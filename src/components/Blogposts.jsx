import React from 'react'
import Blogpost from './Blogpost'
import CreatePostBlock from './UI/CreatePostBlock/CreatePostBlock'

const postStatus = (props) => {
  if (props.blogposts.length == 0 && props.loading == false) {
    return <div className='deleted'><h1>Posts deleted</h1></div>
  } else if (props.blogposts.length == 0 && props.loading == true) {
    return <div className='loading'><h1>Loading, Please Wait</h1><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
  } else {
    return props.blogposts.map((blogpost, index)=> {
      return <Blogpost blogpost={blogpost} index={index} deleteBlogpost={props.deleteBlogpost} key={index} />
    })
  }
}

const Blogposts = (props) => {
  return (
    <ul className='blogposts-list'>
      <CreatePostBlock display={props.display} createNewPost={props.createNewPost} closeModal={props.closeModal}/>
        {
          postStatus(props)
          }
    </ul>
  )
}


export default Blogposts