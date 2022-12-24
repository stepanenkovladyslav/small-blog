import React from 'react'
import PostAPI from '../API/PostAPI';

function getPages (props) {
    let pages =[];
    for(let i = 1; i <= props.numberofpages; i++) {
        pages.push(<li className='page' key={i}><a href='#' onClick={()=>props.changePage(i)}>{i}</a></li>)
    } 
    return pages
}

const Pagelist = (props) => {
  return (
    <ul className="pages">
       {getPages(props)}
    </ul>
  )
}

export default Pagelist