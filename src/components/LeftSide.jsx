import React from 'react'
import Blogposts from './Blogposts'
import Pagelist from './Pagelist'
import SearchSort from './SearchSort'

const LeftSide = (props) => {
  return (
    <div className='left-side'>
        <SearchSort sort={props.sort} blogposts={props.blogposts} search={props.search} change={props.change} searchText={props.searchText} changeSearch={props.changeSearch} changeActiveSort={props.changeActiveSort}/>
        <Blogposts blogposts={props.blogposts} display={props.display} createNewPost={props.createNewPost} deleteBlogpost={props.deleteBlogpost} loading={props.loading} closeModal={props.closeModal}/>
        <Pagelist numberofpages={props.pages} changePage={props.changePage} page={props.page}/>
    </div>
  )
}

export default LeftSide