import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MainContent = ({blogposts, numberOfPages, rightImage, display, makeVisible, createNewPost, deleteBlogpost, sort, search, changePage, searchText, changeSearch, changeActiveSort, loading, page, closeModal}) => {
  return (
    <div className='mainContent'>
        <LeftSide blogposts={blogposts} sort={sort} pages={numberOfPages} display={display} createNewPost={createNewPost} deleteBlogpost={deleteBlogpost} search={search} changePage={changePage} searchText={searchText} changeSearch={changeSearch} changeActiveSort={changeActiveSort} loading={loading} page={page} closeModal={closeModal}/>
        <RightSide img={rightImage} makeVisible={makeVisible} />
    </div>
  )
}

export default MainContent