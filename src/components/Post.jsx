import React from 'react'
import style from '../pages/PostPage.module.css'

    function getPost (props) {
            if (props.post) {
                return (
                <div className={style.post}>
                    <h1 className={style.postTitle}>{props.post.title}</h1>
                    <p className={style.postBody}>{props.post.body}</p>  
                </div>
            )
        
        }
    }

const Post = (props) => {
    return (
        getPost(props)
    )
}


export default Post